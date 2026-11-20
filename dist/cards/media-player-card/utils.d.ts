import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant, MediaPlayerEntity } from "../../ha";
import { MediaPlayerCardConfig, MediaPlayerMediaControl } from "./media-player-card-config";
export declare function callService(e: MouseEvent, hass: HomeAssistant, stateObj: HassEntity, serviceName: string): void;
export declare function computeMediaNameDisplay(config: MediaPlayerCardConfig, entity: MediaPlayerEntity, hass: HomeAssistant): string;
export declare function computeMediaStateDisplay(config: MediaPlayerCardConfig, entity: MediaPlayerEntity, hass: HomeAssistant): string;
export declare function getVolumeLevel(entity: MediaPlayerEntity): number;
export declare function computeMediaIcon(config: MediaPlayerCardConfig, entity: MediaPlayerEntity): string | undefined;
export interface ControlButton {
    icon: string;
    action: string;
}
export declare const computeMediaControls: (stateObj: MediaPlayerEntity, controls: MediaPlayerMediaControl[]) => ControlButton[];
export declare const formatMediaTime: (seconds: number | undefined) => string;
export declare const cleanupMediaTitle: (title?: string) => string | undefined;
/**
 * Set volume of a media player entity.
 * @param hass Home Assistant object
 * @param entity_id entity ID of media player
 * @param volume_level number between 0..1
 * @returns
 */
export declare const setMediaPlayerVolume: (hass: HomeAssistant, entity_id: string, volume_level: number) => Promise<import("../../ha").ServiceCallResponse>;
export declare const handleMediaControlClick: (hass: HomeAssistant, stateObj: MediaPlayerEntity, action: string) => void;
