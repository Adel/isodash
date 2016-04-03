import {CommunicationEvent} from "./CommunicationEvent";

export class Data implements CommunicationEvent {
    name = 'Data';

    constructor(public fetcherName: string, public data: any) {
    }

}