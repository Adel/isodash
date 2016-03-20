/// <reference path="../../node_modules/zone.js/dist/zone.js.d.ts" />

import {Test} from './test';

export class App {
    method() {
        new Test().method();
    }
}