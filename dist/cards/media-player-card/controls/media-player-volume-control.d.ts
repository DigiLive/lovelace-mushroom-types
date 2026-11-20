import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant, MediaPlayerEntity } from "../../../ha";
import { MediaPlayerVolumeControl } from "../media-player-card-config";
export declare const isVolumeControlVisible: (entity: MediaPlayerEntity, controls?: MediaPlayerVolumeControl[]) => boolean;
export declare class MediaPlayerVolumeControls extends LitElement {
    hass: HomeAssistant;
    entity: MediaPlayerEntity;
    fill: boolean;
    controls: MediaPlayerVolumeControl[];
    private handleSliderChange;
    handleSliderCurrentChange(e: CustomEvent<{
        value?: number;
    }>): void;
    private handleClick;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
