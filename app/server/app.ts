/// <reference path="../../node_modules/zone.js/dist/zone.js.d.ts" />
//TODO remove zone.d.ts manually inclusion when bug is fixed in angular

import 'reflect-metadata';

import {Inject, Injectable} from "angular2/core";
import {Application, start} from "./annotation/Service";
import {MySrv} from "./MySrv";

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
export class App extends Application {

    constructor(@Inject(MySrv) private services: Array<MySrv>) {
        super();
    }

    start() {
        this.services.forEach((s: MySrv) => s.methode());
    }
}

start(<Application>App);