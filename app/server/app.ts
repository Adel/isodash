import 'reflect-metadata';

import {Inject} from "angular2/core";
import {Application, start} from "./annotation/Service";
import {Fetcher} from "./fetcher/Fetcher";
import {FetcherToken} from "./fetcher/Fetcher";
import {StaticServer} from "./service/StaticServer";

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
export class App implements Application {

    constructor(@Inject(FetcherToken) private fetchers: Array<Fetcher>, @Inject(StaticServer) private staticServer: StaticServer) {
    }

    start() {
        this.staticServer.start();
        this.fetchers.forEach((f: Fetcher) => f.start());
    }
}

start(<Application>App);