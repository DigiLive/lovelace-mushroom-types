import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, nothing } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import { PersonCardConfig } from "./person-card-config";
export declare class PersonCard extends MushroomBaseCard<PersonCardConfig> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<PersonCardConfig>;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult | typeof nothing;
    renderStateBadge(stateObj: HassEntity): import("lit-html").TemplateResult<1>;
    renderBadge(stateObj: HassEntity): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
