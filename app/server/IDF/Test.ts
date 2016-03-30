import {Service} from "../annotation/Service";
import {Http} from "../service/Http";
import {Fetcher, FetcherToken, FetcherMetaInfo, Type} from "../fetcher/Fetcher";
import * as http from 'http';
import {Client} from "../service/Client";
import {Data} from "../../shared/communication/Data";

@Service({token: FetcherToken})
export class Test implements Fetcher {

    private static NAME = 'Test';

    constructor(private http: Http, private client: Client) {
    }

    getMetaInfo(): FetcherMetaInfo {
        return {
            name: Test.NAME,
            description: 'This is a test.',
            imageUrl: '',
            output: {
                date: Type.Date,
                value: Type.Number
            }
        };
    }

    start() {
        setInterval(() => {
            console.log('IDF/Test :: START REQUEST');
            this.http.get('http://www.mocky.io/v2/56eea59312000099007b1c3c', (error: any, response: http.IncomingMessage, body: any) => {
                this.client.send(new Data(Test.NAME, {date: new Date(), value: JSON.parse(body)[0].value}));
            });
        }, 5000);
    }
}