import {CommunicationEvent} from "./CommunicationEvent";

const NAME: string = 'Data';

export class Data implements CommunicationEvent {
    name: string = NAME;

    constructor(public fetcherName: string, public data: any) {
    }

    static getName() {
        return NAME;
    }

}