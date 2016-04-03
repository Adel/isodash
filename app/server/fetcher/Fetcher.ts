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

export interface FetcherTypes {
    [name: string]: Type;
}

export interface FetcherMetaInfo {
    name: string;
    description: string;
    imageUrl: string;
    options: FetcherTypes;
    output: FetcherTypes;
}

export interface FetcherFromConfig {
    type: string,
    name: string,
    options: any
}

export class FetcherDIToken {

}

export interface Fetcher {
    getMetaInfo(): FetcherMetaInfo;
    start(filledOptions: any): any;
}