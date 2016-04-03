import {Service} from "../annotation/Service";
import {Http} from "../service/Http";
import {Fetcher, FetcherDIToken} from "../fetcher/Fetcher";
import * as http from 'http';
import {Client} from "../service/Client";
import {Data} from "../../shared/communication/Data";
import {PluginMetaInfo, Type} from "../../shared/model/PluginMetaInfo";

@Service({token: FetcherDIToken})
export class Test implements Fetcher {

    private static NAME = 'Test';

    constructor(private http: Http, private client: Client) {
    }

    getMetaInfo(): PluginMetaInfo {
        return {
            name: Test.NAME,
            description: 'This is a test.',
            imageUrl: '',
            options: {
                color: Type.String,
                url: Type.String
            },
            output: {
                date: Type.Date,
                value: Type.Number,
                color: Type.String
            }
        };
    }

    start(filledOptions: any) {
        setInterval(() => {
            console.log('IDF/Test :: START REQUEST');
            this.http.get(filledOptions.url, (error: any, response: http.IncomingMessage, body: any) => {
                this.client.send(new Data(Test.NAME, {date: new Date(), value: JSON.parse(body)[0].value, color: filledOptions.color}));
            });
        }, 5000);
    }
}