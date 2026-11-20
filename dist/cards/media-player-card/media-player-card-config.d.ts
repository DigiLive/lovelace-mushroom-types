import { LovelaceCardConfig } from "../../ha";
import { ActionsSharedConfig } from "../../shared/config/actions-config";
import { AppearanceSharedConfig } from "../../shared/config/appearance-config";
import { EntitySharedConfig } from "../../shared/config/entity-config";
export declare const MEDIA_LAYER_MEDIA_CONTROLS: readonly ["on_off", "shuffle", "previous", "play_pause_stop", "next", "repeat"];
export type MediaPlayerMediaControl = (typeof MEDIA_LAYER_MEDIA_CONTROLS)[number];
export declare const MEDIA_PLAYER_VOLUME_CONTROLS: readonly ["volume_mute", "volume_set", "volume_buttons"];
export type MediaPlayerVolumeControl = (typeof MEDIA_PLAYER_VOLUME_CONTROLS)[number];
export type MediaPlayerCardConfig = LovelaceCardConfig & EntitySharedConfig & AppearanceSharedConfig & ActionsSharedConfig & {
    use_media_info?: boolean;
    show_volume_level?: boolean;
    volume_controls?: MediaPlayerVolumeControl[];
    media_controls?: MediaPlayerMediaControl[];
    collapsible_controls?: boolean;
};
export declare const mediaPlayerCardConfigStruct: import("superstruct").Struct<{
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
    collapsible_controls: boolean;
    use_media_info: boolean;
    show_volume_level: boolean;
    volume_controls: ("volume_mute" | "volume_set" | "volume_buttons")[];
    media_controls: ("repeat" | "on_off" | "shuffle" | "previous" | "play_pause_stop" | "next")[];
    hold_action?: any;
    tap_action?: any;
    double_tap_action?: any;
    view_layout?: any;
    layout_options?: any;
    grid_options?: any;
    visibility?: any;
}, {
    use_media_info: import("superstruct").Struct<boolean, null>;
    show_volume_level: import("superstruct").Struct<boolean, null>;
    volume_controls: import("superstruct").Struct<("volume_mute" | "volume_set" | "volume_buttons")[], import("superstruct").Struct<"volume_mute" | "volume_set" | "volume_buttons", {
        volume_mute: "volume_mute";
        volume_set: "volume_set";
        volume_buttons: "volume_buttons";
    }>>;
    media_controls: import("superstruct").Struct<("repeat" | "on_off" | "shuffle" | "previous" | "play_pause_stop" | "next")[], import("superstruct").Struct<"repeat" | "on_off" | "shuffle" | "previous" | "play_pause_stop" | "next", {
        repeat: "repeat";
        on_off: "on_off";
        shuffle: "shuffle";
        previous: "previous";
        play_pause_stop: "play_pause_stop";
        next: "next";
    }>>;
    collapsible_controls: import("superstruct").Struct<boolean, null>;
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
