import {Visualizer, VisualizerMetaInfo, Type} from "../service/visualizer/Visualizer";
import {Component} from "angular2/core";
import {Server} from "../service/Server";

@Component({
    selector: 'test-idv',
    template: `<div style="background: red; width: 50px; height: 50px; display: inline-block"></div>`
})
export class TestIdv implements Visualizer {

    constructor(private server: Server) {
        console.log(server);
    }

    getMetaInfo(): VisualizerMetaInfo {
        return {
            name: '',
            description: '',
            imageUrl: '',
            options: {},
            input: {
                date: Type.Date,
                value: Type.Number,
                color: Type.String
            }
        };
    }

    start(filledOptions: any): any {

    }

}