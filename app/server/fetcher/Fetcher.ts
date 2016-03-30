export enum Type {
    String,
    Number,
    Boolean,
    Date,
    ArrayString,
    ArrayNumber,
    ArrayBoolean,
    ArrayDate
}

export interface FetcherOutput {
    [name: string]: Type;
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