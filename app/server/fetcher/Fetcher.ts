export interface FetcherOutput {
    [name: string]: string | number | boolean | Date | Array<string | number | boolean | Date>;
}

export interface FetcherMetaInfo {
    name: string;
    description: string;
    imageUrl: string;
    output: FetcherOutput;
}

export class FetcherToken {

}

export interface Fetcher {
    getMetaInfo(): FetcherMetaInfo;
    start(): any;
}