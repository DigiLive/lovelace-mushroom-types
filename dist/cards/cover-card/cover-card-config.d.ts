import { ActionsSharedConfig } from "../../shared/config/actions-config";
import { AppearanceSharedConfig } from "../../shared/config/appearance-config";
import { EntitySharedConfig } from "../../shared/config/entity-config";
import { LovelaceCardConfig } from "../../ha";
export type CoverCardConfig = LovelaceCardConfig & EntitySharedConfig & AppearanceSharedConfig & ActionsSharedConfig & {
    show_buttons_control?: boolean;
    show_position_control?: boolean;
    show_tilt_position_control?: boolean;
};
export declare const coverCardConfigStruct: import("superstruct").Struct<{
    entity: string;
    type: string;
    index: number;
    view_index: number;
    name: string | {
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    } | ({
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    })[];
    icon: string;
    layout: "default" | "horizontal" | "vertical";
    fill_container: boolean;
    primary_info: "none" | "state" | "name" | "last-changed" | "last-updated";
    secondary_info: "none" | "state" | "name" | "last-changed" | "last-updated";
    icon_type: "none" | "icon" | "entity-picture";
    show_buttons_control: boolean;
    show_position_control: boolean;
    show_tilt_position_control: boolean;
    hold_action?: any;
    tap_action?: any;
    double_tap_action?: any;
    view_layout?: any;
    layout_options?: any;
    grid_options?: any;
    visibility?: any;
}, {
    show_buttons_control: import("superstruct").Struct<boolean, null>;
    show_position_control: import("superstruct").Struct<boolean, null>;
    show_tilt_position_control: import("superstruct").Struct<boolean, null>;
    entity: import("superstruct").Struct<string, null>;
    hold_action: import("superstruct").Struct<any, null>;
    tap_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
    type: import("superstruct").Struct<string, null>;
    index: import("superstruct").Struct<number, null>;
    view_index: import("superstruct").Struct<number, null>;
    view_layout: import("superstruct").Struct<any, null>;
    name: import("superstruct").Struct<string | {
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    } | ({
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    })[], null>;
    icon: import("superstruct").Struct<string, null>;
    layout: import("superstruct").Struct<"default" | "horizontal" | "vertical", null>;
    fill_container: import("superstruct").Struct<boolean, null>;
    primary_info: import("superstruct").Struct<"none" | "state" | "name" | "last-changed" | "last-updated", {
        none: "none";
        state: "state";
        name: "name";
        "last-changed": "last-changed";
        "last-updated": "last-updated";
    }>;
    secondary_info: import("superstruct").Struct<"none" | "state" | "name" | "last-changed" | "last-updated", {
        none: "none";
        state: "state";
        name: "name";
        "last-changed": "last-changed";
        "last-updated": "last-updated";
    }>;
    icon_type: import("superstruct").Struct<"none" | "icon" | "entity-picture", {
        none: "none";
        icon: "icon";
        "entity-picture": "entity-picture";
    }>;
    layout_options: import("superstruct").Struct<any, null>;
    grid_options: import("superstruct").Struct<any, null>;
    visibility: import("superstruct").Struct<any, null>;
}>;
