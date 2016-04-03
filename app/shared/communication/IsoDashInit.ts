import {CommunicationEvent} from "./CommunicationEvent";
import {Visualizer} from "../../client/service/visualizer/Visualizer";
import {PluginMetaInfo} from "../model/PluginMetaInfo";

export class IsoDashInit implements CommunicationEvent {
    name = 'IsoDashInit';

    constructor(public fetchers: Array<PluginMetaInfo>, public visualizers: Array<Visualizer>) {
    }
}