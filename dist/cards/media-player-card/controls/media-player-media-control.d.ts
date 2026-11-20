import { LitElement, TemplateResult } from "lit";
import { HomeAssistant, MediaPlayerEntity } from "../../../ha";
import { MediaPlayerMediaControl } from "../media-player-card-config";
export declare const isMediaControlVisible: (entity: MediaPlayerEntity, controls?: MediaPlayerMediaControl[]) => boolean;
export declare class MediaPlayerMediaControls extends LitElement {
    hass: HomeAssistant;
    entity: MediaPlayerEntity;
    controls: MediaPlayerMediaControl[];
    fill: boolean;
    private _handleClick;
    protected render(): TemplateResult;
}
