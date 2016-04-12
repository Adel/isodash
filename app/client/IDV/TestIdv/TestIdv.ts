import {Visualizer, VisualizerMetaInfo, Type} from "../../visualizer/Visualizer";
import {Component} from "angular2/core";

@Component({
    selector: 'test-idv',
    templateUrl: 'IDV/TestIdv/TestIdv.html',
    styleUrls: ['IDV/TestIdv/TestIdv.css']
})
export class IDV implements Visualizer {

    _data: any = {value: 156};

    constructor() {
    }

    getMetaInfo(): VisualizerMetaInfo {
        return {
            name: 'TestIdv',
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

    data(data: any) {
        this._data = data;
    }

}