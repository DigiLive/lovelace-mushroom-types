import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, nothing, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, VacuumEntity } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/card";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/vacuum-commands-control";
import { VacuumCardConfig } from "./vacuum-card-config";
export declare class VacuumCard extends MushroomBaseCard<VacuumCardConfig, VacuumEntity> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<VacuumCardConfig>;
    protected get hasControls(): boolean;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    protected renderIcon(stateObj: HassEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
