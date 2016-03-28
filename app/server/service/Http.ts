import {Service} from "../annotation/Service";
import {CoreOptions} from "request";
import * as request from "request";

@Service()
export class Http {

    get(url: string, options?: CoreOptions) {
        return request(url, options);
    }

}
