import {bootstrap} from "angular2/bootstrap";
import {Component, DynamicComponentLoader, Injector, OnInit, ComponentRef, ApplicationRef} from "angular2/core";
import {Server} from "./service";
import {IsoDashInit, Data} from "../shared/communication";
import {Visualizer} from "./visualizer/Visualizer";

var TestIdv = require('./IDV/TestIdv/TestIdv');//TODO find a way to delete it

const NB_ZONES_WIDTH = 10;
const NB_ZONES_HEIGHT = 10;
const FACTOR_SIZE_WIDTH = 10;
const FACTOR_SIZE_HEIGHT = 10;

@Component({
    selector: 'my-app',
    templateUrl: 'app.html'//relative to app/client
})
export class App implements OnInit {

    zones: Array<any>;

    constructor(private server: Server, private dynamicComponentLoader: DynamicComponentLoader, private injector: Injector, private appRef : ApplicationRef) {
        this.zones = [];
        let nbZones = NB_ZONES_WIDTH * NB_ZONES_HEIGHT;
        for(let i=0; i<nbZones; i++) {
            this.zones.push({index: i, width: `${FACTOR_SIZE_WIDTH}%`, height: `${FACTOR_SIZE_HEIGHT}%`});
        }


    }

    ngOnInit() {
        const compos: {[compoName: string]: Visualizer} = {};
        this.server
            .on(IsoDashInit, (event:IsoDashInit) => {
                console.log('IsoDashInit', event);
                event.visualizers.forEach((module: string, index: number) => {
                    this.dynamicComponentLoader.loadAsRoot(require(module).IDV, `#child-${index}`, this.injector)
                        .then((componentRef: ComponentRef) => {
                            const compo = <Visualizer>componentRef.instance;
                            compos[compo.getMetaInfo().name] = compo;
                            (<any>this.appRef)._loadComponent(componentRef);
                        });
                });
            })
            .on(Data, (event: Data) => {
                console.log('Data', event);
                compos['TestIdv'].data(event.data);
            });
    }

}

bootstrap(App, [Server]);