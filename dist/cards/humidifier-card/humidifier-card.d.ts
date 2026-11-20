import { CSSResultGroup, nothing } from "lit";
import { HomeAssistant, HumidifierEntity, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/button";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/humidifier-humidity-control";
import { HumidifierCardConfig } from "./humidifier-card-config";
export declare class HumidifierCard extends MushroomBaseCard<HumidifierCardConfig, HumidifierEntity> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<HumidifierCardConfig>;
    protected get hasControls(): boolean;
    setConfig(config: HumidifierCardConfig): void;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult | typeof nothing;
    protected renderBadge(entity: HumidifierEntity): import("lit-html").TemplateResult<1> | typeof nothing;
    renderActionBadge(entity: HumidifierEntity): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
