import {PluginMetaInfo} from "../../shared/model/PluginMetaInfo";

export interface FetcherFromConfig {
    type: string,
    name: string,
    options: any
}

export class FetcherDIToken {

}

export interface Fetcher {
    getMetaInfo(): PluginMetaInfo;
    start(filledOptions: any): any;
}