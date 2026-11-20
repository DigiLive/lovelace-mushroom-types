import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, nothing, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/button";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/fan-oscillate-control";
import "./controls/fan-direction-control";
import "./controls/fan-percentage-control";
import { FanCardConfig } from "./fan-card-config";
export declare class FanCard extends MushroomBaseCard<FanCardConfig> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<FanCardConfig>;
    protected get hasControls(): boolean;
    setConfig(config: FanCardConfig): void;
    protected updated(changedProperties: PropertyValues): void;
    private percentage?;
    updatePercentage(): void;
    private onCurrentPercentageChange;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    protected renderIcon(stateObj: HassEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
