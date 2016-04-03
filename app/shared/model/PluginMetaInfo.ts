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

export interface PluginTypes {
    [name: string]: Type;
}

export interface PluginMetaInfo {
    name: string;
    description: string;
    imageUrl: string;
    options: PluginTypes;
    output: PluginTypes;
}