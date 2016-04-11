import 'reflect-metadata';

import {Inject, Injectable} from "angular2/core";
import {Application, start} from "./annotation/Service";
import {Fetcher, FetcherDIToken, FetcherFromConfig} from "./fetcher/Fetcher";
import {StaticServer, Client, DynamicFetcherLoader} from "./service";
import * as isodashConf from "../../../isodash.conf.json";
import {CheckFetcherOption} from "./service/CheckFetcherOption";

@Injectable()
export class App implements Application {

    constructor(@Inject(FetcherDIToken) private fetchers: Array<Fetcher>, private staticServer: StaticServer, private client: Client, private checkFetcherOption: CheckFetcherOption) {
        client.fetchers = fetchers;
        client.visualizersClass = isodashConf.visualizers;
    }

    start() {
        this.staticServer.start();
        const errors: Array<string> = [];
        isodashConf.fetchersConfiguration.forEach((fetcherConf: FetcherFromConfig) => {
            const fetcher = this.fetchers.find((fetcher: Fetcher) => {
                return fetcherConf.name === fetcher.getMetaInfo().name;
            });
            if(fetcher) {
                const errorsFromConfig = this.checkFetcherOption.check(fetcher, fetcherConf);
                if(errorsFromConfig.length === 0) {
                    //TODO decomment me
                    //fetcher.start(fetcherConf.options);
                } else {
                    errors.push(...errorsFromConfig);
                }
            } else {
                errors.push(`Fetcher not found ${fetcherConf.name}! Please correct its name in isodash.conf.json`);
            }
        });
        errors.forEach((error) => console.error(error));
    }
}

new DynamicFetcherLoader().start(isodashConf.fetchers);
start(App);