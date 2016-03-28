import {bootstrap} from "angular2/bootstrap";
import {Component} from "angular2/core";
import {Server} from "./service/Server";

@Component({
    selector: 'my-app',
    template: `<div style="background: red; width: 50px; height: 50px; display: inline-block"></div>`
})
export class App {

    constructor(private server: Server) {

    }

}

bootstrap(App, [Server]);