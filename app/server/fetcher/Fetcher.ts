import {PluginMetaInfo, PluginTypes} from "../../shared/model/PluginMetaInfo";
export {Type} from "../../shared/model/PluginMetaInfo";

export interface FetcherMetaInfo extends PluginMetaInfo {
    output: PluginTypes;
}

export interface FetcherFromConfig {
    type: string,
    name: string,
    options: any
}

export class FetcherDIToken {

}

export interface Fetcher {
    getMetaInfo(): FetcherMetaInfo;
    start(filledOptions: any): any;
}