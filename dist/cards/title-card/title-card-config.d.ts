import { ActionConfig, LovelaceCardConfig } from "../../ha";
export interface TitleCardConfig extends LovelaceCardConfig {
    title?: string;
    subtitle?: string;
    alignment?: string;
    title_tap_action?: ActionConfig;
    subtitle_tap_action?: ActionConfig;
}
export declare const titleCardConfigStruct: import("superstruct").Struct<{
    title: string;
    type: string;
    index: number;
    view_index: number;
    alignment: string;
    subtitle: string;
    view_layout?: any;
    layout_options?: any;
    grid_options?: any;
    visibility?: any;
    title_tap_action?: any;
    subtitle_tap_action?: any;
}, {
    title: import("superstruct").Struct<string, null>;
    subtitle: import("superstruct").Struct<string, null>;
    alignment: import("superstruct").Struct<string, null>;
    title_tap_action: import("superstruct").Struct<any, null>;
    subtitle_tap_action: import("superstruct").Struct<any, null>;
    type: import("superstruct").Struct<string, null>;
    index: import("superstruct").Struct<number, null>;
    view_index: import("superstruct").Struct<number, null>;
    view_layout: import("superstruct").Struct<any, null>;
    layout_options: import("superstruct").Struct<any, null>;
    grid_options: import("superstruct").Struct<any, null>;
    visibility: import("superstruct").Struct<any, null>;
}>;
