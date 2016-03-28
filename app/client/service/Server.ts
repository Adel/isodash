export class Server {

    private ws: WebSocket;

    constructor() {
        this.ws = new WebSocket(`ws://${location.hostname}:8080`);
        this.ws.onmessage = (event) => {
            console.log(event.data);
            this.send({m: 'hello back'});
        }
    }

    send(data: Object) {
        this.ws.send(JSON.stringify(data));
    }
}