import {CommunicationEvent} from "./CommunicationEvent";
import {FetcherMetaInfo} from "../../server/fetcher/Fetcher";

export class IsoDashInit implements CommunicationEvent {
    name = 'IsoDashInit';

    constructor(public fetchers: Array<FetcherMetaInfo>, public visualizers: Array<string>) {
    }
}