import {Observable} from 'rxjs/Observable';
import {Subscriber} from "rxjs/Subscriber";
import {CommunicationEvent} from "../../shared/communication/CommunicationEvent";

export class Server {

    private ws: WebSocket;
    private eventStream: Observable<CommunicationEvent>;

    constructor() {
        this.ws = new WebSocket(`ws://${location.hostname}:8080`);
        this.eventStream = Observable.create((observer: Subscriber<CommunicationEvent>) => {
            this.ws.addEventListener("close", (ev: CloseEvent) => {
                observer.complete();
                console.error('WebSocket closed!', ev);
            });
            this.ws.addEventListener("error", (ev: ErrorEvent) => {
                observer.error(ev);
                console.error('WebSocket error!', ev);
            });
            this.ws.addEventListener("message", (ev: MessageEvent) => {
                console.log('WebSocket message!', ev.data);
                observer.next(ev.data);
                this.send({m: 'hello back'});
            });
        });
    }

    send(data: Object) {
        this.ws.send(JSON.stringify(data));
    }
}