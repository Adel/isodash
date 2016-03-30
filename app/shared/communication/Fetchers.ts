import {CommunicationEvent} from "./CommunicationEvent";
import {FetcherMetaInfo} from "../../server/fetcher/Fetcher";

export class Fetchers implements CommunicationEvent {
    name = 'Fetchers';

    constructor(public fetchers: Array<FetcherMetaInfo>) {
    }
}