//import {Observable} from 'rxjs/Observable';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';
import {filter} from 'rxjs/operator/filter';
import {Subscriber} from "rxjs/Subscriber";
import {CommunicationEvent} from "../../shared/communication/CommunicationEvent";
import {IsoDashInit} from "../../shared/communication/IsoDashInit";
import {Observable} from "../../../build/app/client/rxjs/Observable";

export class Server {

    private ws: WebSocket;
    private eventStream: WebSocketSubject<CommunicationEvent>;

    constructor() {
        this.eventStream = WebSocketSubject.create<CommunicationEvent>(`ws://${location.hostname}:8080`);
        this.send({m: 'hello back'});
        this.eventStream.forEach((e:CommunicationEvent) => console.log(e), this);
        //const obs = filter((e: CommunicationEvent)  => e.name === IsoDashInit.name);
        //obs.forEach((e: IsoDashInit) => console.log('FILTER', e), this);
    }

    send(data: Object) {
        this.eventStream.next(JSON.stringify(data));
    }
}