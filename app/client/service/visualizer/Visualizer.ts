import {PluginMetaInfo} from "../../../shared/model/PluginMetaInfo";

export interface Visualizer {
    getMetaInfo(): PluginMetaInfo;
    start(filledOptions: any): any;
}