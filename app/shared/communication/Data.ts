import {CommunicationEvent} from "./CommunicationEvent";
import {FetcherOutput} from "../../server/fetcher/Fetcher";

export class Data implements CommunicationEvent {
    name = 'Data';

    constructor(public fetcherName: string, public data: any) {
    }

}