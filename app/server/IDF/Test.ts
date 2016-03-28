import {Service} from "../annotation/Service";
import {Http} from "../service/Http";
import {Fetcher, FetcherToken, FetcherMetaInfo} from "../fetcher/Fetcher";
import * as http from 'http';
import {Client} from "../service/Client";

@Service({token: FetcherToken})
export class Test implements Fetcher {

    constructor(private http: Http, private client: Client) {
    }

    getMetaInfo(): FetcherMetaInfo {
        return undefined;
    }

    start() {
        setInterval(() => {
            console.log('IDF/Test :: START REQUEST');
            this.http.get('http://www.mocky.io/v2/56eea59312000099007b1c3c', (error: any, response: http.IncomingMessage, body: any) => {
                this.client.send({value: JSON.parse(body)[0].value});
            });
        }, 1000);
    }
}