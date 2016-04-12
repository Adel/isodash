import {bootstrap} from "angular2/bootstrap";
import {Component, DynamicComponentLoader, Injector} from "angular2/core";
import {Server} from "./service";
import {IsoDashInit, Data} from "../shared/communication";

require('./IDV/TestIdv/TestIdv');//TODO find a way to delete it

const injector = Injector.resolveAndCreate([Server]);

const NB_ZONES_WIDTH = 10;
const NB_ZONES_HEIGHT = 10;
const FACTOR_SIZE_WIDTH = 10;
const FACTOR_SIZE_HEIGHT = 10;

@Component({
    selector: 'my-app',
    templateUrl: 'app.html'//relative to app/client
})
export class App {

    zones: Array<any>;

    constructor(private server: Server, private dynamicComponentLoader: DynamicComponentLoader) {
        this.zones = [];
        let nbZones = NB_ZONES_WIDTH * NB_ZONES_HEIGHT;
        for(let i=0; i<nbZones; i++) {
            this.zones.push({index: i, width: `${FACTOR_SIZE_WIDTH}%`, height: `${FACTOR_SIZE_HEIGHT}%`});
        }
        server
            .on(IsoDashInit, (event:IsoDashInit) => {
                console.log('on', event);
                event.visualizers.forEach((module: string, index: number) => {
                    dynamicComponentLoader.loadAsRoot(require(module).IDV, `#child-${index}`, injector)
                        .then((res) => {
                            console.log(res);
                        });
                });
            })
            .on(Data, (event: Data) => {

            });

    }

}

bootstrap(App, [Server]);