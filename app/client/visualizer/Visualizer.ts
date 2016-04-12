import {PluginMetaInfo, PluginTypes} from "../../shared/model/PluginMetaInfo";
export {Type} from "../../shared/model/PluginMetaInfo";

export interface VisualizerMetaInfo extends PluginMetaInfo {
    input: PluginTypes;
}

export interface Visualizer {
    getMetaInfo(): VisualizerMetaInfo;
    start(filledOptions: any): any;
    data(data: any): void;
}