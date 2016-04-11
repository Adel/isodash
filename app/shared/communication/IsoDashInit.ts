import {CommunicationEvent} from "./CommunicationEvent";
import {FetcherMetaInfo} from "../../server/fetcher/Fetcher";

const NAME: string = 'IsoDashInit';

export class IsoDashInit implements CommunicationEvent {
    name: string = NAME;

    constructor(public fetchers: Array<FetcherMetaInfo>, public visualizers: Array<string>) {
    }

    static getName() {
        return NAME;
    }
}