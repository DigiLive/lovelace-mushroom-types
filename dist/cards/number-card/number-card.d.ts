import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, nothing, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/button";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/number-value-control";
import { NumberCardConfig } from "./number-card-config";
export declare class NumberCard extends MushroomBaseCard<NumberCardConfig> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<NumberCardConfig>;
    protected get hasControls(): boolean;
    private value?;
    private _handleAction;
    private onCurrentValueChange;
    protected render(): TemplateResult | typeof nothing;
    renderIcon(stateObj: HassEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
