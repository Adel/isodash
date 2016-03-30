import 'reflect-metadata';

import {Inject, Injectable} from "angular2/core";
import {Application, start} from "./annotation/Service";
import {Fetcher, FetcherToken} from "./fetcher/Fetcher";
import {StaticServer, Client} from "./service";

/********
 * load services
 ********/
if(!process.argv[2]) {
    console.error('Call me with services in params (e.g. `node server/app.js "service1:service2..."`)');
    process.exit(1);
}

const services = process.argv[2].split(':');
services.forEach((s: string) => {
    require(s);
});

/********
 * bootstrap app
 ********/
@Injectable()
export class App implements Application {

    constructor(@Inject(FetcherToken) private fetchers: Array<Fetcher>, private staticServer: StaticServer, private client: Client) {
        client.fetchers = fetchers;
    }

    start() {
        this.staticServer.start();
        this.fetchers.forEach((f: Fetcher) => f.start());
    }
}

start(<Application>App);