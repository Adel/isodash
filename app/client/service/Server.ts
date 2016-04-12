import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';
import {CommunicationEvent} from "../../shared/communication";
import {ClassDefinition} from "angular2/core";
import {Communication} from "../../shared/communication";

export class Server {

    private ws: WebSocket;
    private eventStream: WebSocketSubject<CommunicationEvent>;

    constructor() {
        this.eventStream = WebSocketSubject.create<CommunicationEvent>(`ws://${location.hostname}:8080`);
    }

    on(communication: Communication, callback: (event: CommunicationEvent) => any) {
        this.eventStream.subscribe((event: CommunicationEvent) => {
            if(event.name === communication.getName()) {
                callback(event)
            }
        });
        return this;
    }

    send(data: CommunicationEvent) {
        this.eventStream.next(data);
    }
}