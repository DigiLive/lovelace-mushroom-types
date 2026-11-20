import { CSSResultGroup, nothing, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, UpdateEntity } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/card";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/update-buttons-control";
import { UpdateCardConfig } from "./update-card-config";
export declare class UpdateCard extends MushroomBaseCard<UpdateCardConfig, UpdateEntity> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<UpdateCardConfig>;
    protected get hasControls(): boolean;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    protected renderIcon(stateObj: UpdateEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
