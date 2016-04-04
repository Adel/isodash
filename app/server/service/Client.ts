import {Service} from "../annotation/Service";
import {Server as WebSocketServer} from 'ws';
import * as WebSocket from "ws";
import {Fetcher} from "../fetcher/Fetcher";
import {CommunicationEvent, IsoDashInit} from "../../shared/communication";

@Service()
export class Client {

    private wss: WebSocketServer;

    public fetchers: Array<Fetcher> = [];
    public visualizersClass: Array<string> = [];

    constructor() {
        this.wss = new WebSocketServer({ port: 8080 });
        this.wss.on('connection', (ws: WebSocket) => this.handleConnection(ws));
    }

    private handleConnection(ws: WebSocket) {
        ws.on('message', (message) => {
            console.log('received: %s', message);
        });

        this.sendTo(new IsoDashInit(this.fetchers.map((f: Fetcher) => f.getMetaInfo()), this.visualizersClass), ws);
    }

    send(data: CommunicationEvent) {
        this.wss.clients.forEach((client: WebSocket) => {
            client.send(JSON.stringify(data));
        });
    }

    sendTo(data: CommunicationEvent, client: WebSocket) {
        client.send(JSON.stringify(data));
    }

}