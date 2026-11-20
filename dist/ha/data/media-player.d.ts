import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
interface MediaPlayerEntityAttributes extends HassEntityAttributeBase {
    media_content_id?: string;
    media_content_type?: string;
    media_artist?: string;
    media_playlist?: string;
    media_series_title?: string;
    media_season?: any;
    media_episode?: any;
    app_name?: string;
    media_position_updated_at?: string | number | Date;
    media_duration?: number;
    media_position?: number;
    media_title?: string;
    icon?: string;
    entity_picture_local?: string;
    is_volume_muted?: boolean;
    volume_level?: number;
    repeat?: string;
    shuffle?: boolean;
    source?: string;
    source_list?: string[];
    sound_mode?: string;
    sound_mode_list?: string[];
}
export interface MediaPlayerEntity extends HassEntityBase {
    attributes: MediaPlayerEntityAttributes;
    state: "playing" | "paused" | "idle" | "off" | "on" | "unavailable" | "unknown";
}
export declare const MEDIA_PLAYER_SUPPORT_PAUSE = 1;
export declare const MEDIA_PLAYER_SUPPORT_SEEK = 2;
export declare const MEDIA_PLAYER_SUPPORT_VOLUME_SET = 4;
export declare const MEDIA_PLAYER_SUPPORT_VOLUME_MUTE = 8;
export declare const MEDIA_PLAYER_SUPPORT_PREVIOUS_TRACK = 16;
export declare const MEDIA_PLAYER_SUPPORT_NEXT_TRACK = 32;
export declare const MEDIA_PLAYER_SUPPORT_TURN_ON = 128;
export declare const MEDIA_PLAYER_SUPPORT_TURN_OFF = 256;
export declare const MEDIA_PLAYER_SUPPORT_PLAY_MEDIA = 512;
export declare const MEDIA_PLAYER_SUPPORT_VOLUME_BUTTONS = 1024;
export declare const MEDIA_PLAYER_SUPPORT_SELECT_SOURCE = 2048;
export declare const MEDIA_PLAYER_SUPPORT_STOP = 4096;
export declare const MEDIA_PLAYER_SUPPORT_PLAY = 16384;
export declare const MEDIA_PLAYER_SUPPORT_REPEAT_SET = 262144;
export declare const MEDIA_PLAYER_SUPPORT_SELECT_SOUND_MODE = 65536;
export declare const MEDIA_PLAYER_SUPPORT_SHUFFLE_SET = 32768;
export declare const MEDIA_PLAYER_SUPPORT_BROWSE_MEDIA = 131072;
export type MediaPlayerBrowseAction = "pick" | "play";
export declare const BROWSER_PLAYER = "browser";
export type MediaClassBrowserSetting = {
    icon: string;
    thumbnail_ratio?: string;
    layout?: "grid";
    show_list_images?: boolean;
};
export interface MediaPlayerItemId {
    media_content_id: string | undefined;
    media_content_type: string | undefined;
}
export interface MediaPickedEvent {
    item: MediaPlayerItem;
    navigateIds: MediaPlayerItemId[];
}
export interface MediaPlayerThumbnail {
    content_type: string;
    content: string;
}
export interface MediaPlayerItem {
    title: string;
    media_content_type: string;
    media_content_id: string;
    media_class: string;
    children_media_class?: string;
    can_play: boolean;
    can_expand: boolean;
    thumbnail?: string;
    children?: MediaPlayerItem[];
    not_shown?: number;
}
export declare const browseMediaPlayer: (hass: HomeAssistant, entityId: string, mediaContentId?: string, mediaContentType?: string) => Promise<MediaPlayerItem>;
export declare const getCurrentProgress: (stateObj: MediaPlayerEntity) => number;
export declare const computeMediaDescription: (stateObj: MediaPlayerEntity) => string;
export {};
