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
import { EntityCardConfig } from "./entity-card-config";
export declare class EntityCard extends MushroomBaseCard<EntityCardConfig> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<EntityCardConfig>;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    renderIcon(stateObj: HassEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
