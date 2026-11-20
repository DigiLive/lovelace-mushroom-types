import { CSSResultGroup, nothing, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, MediaPlayerEntity } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/media-player-media-control";
import "./controls/media-player-volume-control";
import { MediaPlayerCardConfig } from "./media-player-card-config";
export declare class MediaPlayerCard extends MushroomBaseCard<MediaPlayerCardConfig, MediaPlayerEntity> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<MediaPlayerCardConfig>;
    private _activeControl?;
    protected get hasControls(): boolean;
    private get _controls();
    _onControlTap(ctrl: any, e: any): void;
    setConfig(config: MediaPlayerCardConfig): void;
    protected updated(changedProperties: PropertyValues): void;
    private volume?;
    updateVolume(): void;
    private onCurrentVolumeChange;
    updateActiveControl(): void;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    private renderOtherControls;
    private renderActiveControl;
    static get styles(): CSSResultGroup;
}
