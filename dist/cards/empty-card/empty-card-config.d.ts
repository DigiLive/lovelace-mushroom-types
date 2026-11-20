import { LovelaceCardConfig } from "../../ha";
export type EmptyCardConfig = LovelaceCardConfig;
export declare const emptyCardConfigStruct: import("superstruct").Struct<{
    type: string;
    index: number;
    view_index: number;
    view_layout?: any;
    layout_options?: any;
    grid_options?: any;
    visibility?: any;
}, {
    index: import("superstruct").Struct<number, null>;
    view_index: import("superstruct").Struct<number, null>;
    view_layout: import("superstruct").Struct<any, null>;
    type: import("superstruct").Struct<string, null>;
    layout_options: import("superstruct").Struct<any, null>;
    grid_options: import("superstruct").Struct<any, null>;
    visibility: import("superstruct").Struct<any, null>;
}>;
