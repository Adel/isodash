import 'reflect-metadata';

import {Inject, Injectable} from "angular2/core";
import {Application, start} from "./annotation/Service";
import {MySrv} from "./MySrv";

//TODO find a way to delete this
//Here because need to load before call @Inject
import './MonService';
import './service2';

@Injectable()
export class App implements Application {

    constructor(@Inject(MySrv) private services: Array<MySrv>) {
    }

    start() {
        this.services.forEach((s: MySrv) => s.methode());
    }
}

start(App);