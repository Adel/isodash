import {Service} from "../annotation/Service";

@Service()
export class DynamicFetcherLoader {

    constructor() {
    }

    start(conf: Array<string>) {
        conf.forEach((f: string) => {
            require(f);
        });
    }

}