import {Service} from "../annotation/Service";
import {Server as WebSocketServer} from 'ws';
import * as WebSocket from "ws";

@Service()
export class Client {

    private wss: WebSocketServer;

    constructor() {
        this.wss = new WebSocketServer({ port: 8080 });
        this.wss.on('connection', (ws: WebSocket) => this.handleConnection(ws));
    }

    private handleConnection(ws: WebSocket) {
        ws.on('message', (message) => {
            console.log('received: %s', message);
        });

        ws.send('something');
    }

    send(data: Object) {
        this.wss.clients.forEach((client: WebSocket) => {
            client.send(JSON.stringify(data));
        });
    }

}