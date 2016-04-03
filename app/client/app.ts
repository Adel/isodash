import {bootstrap} from "angular2/bootstrap";
import {Component, DynamicComponentLoader, ElementRef} from "angular2/core";
import {Server} from "./service/Server";
import {Injector} from "angular2/core";

const injector = Injector.resolveAndCreate([Server]);

@Component({
    selector: 'my-app',
    template: `<div id="child"></div>`
})
export class App {

    constructor(private server: Server, private dynamicComponentLoader: DynamicComponentLoader) {
        setTimeout(() => {
            var Compo = require("./IDV/TestIdv").TestIdv;
            dynamicComponentLoader.loadAsRoot(Compo, '#child', injector)
                .then((res) => {
                    console.log(res);
                });
        }, 5000);

    }

}

bootstrap(App, [Server]);