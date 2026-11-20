import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, nothing, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/select-option-control";
import { SelectCardConfig } from "./select-card-config";
export declare class SelectCard extends MushroomBaseCard<SelectCardConfig> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<SelectCardConfig>;
    protected get hasControls(): boolean;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    renderIcon(stateObj: HassEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
