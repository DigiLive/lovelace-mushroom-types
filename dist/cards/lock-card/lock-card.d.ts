import { CSSResultGroup, nothing, TemplateResult } from "lit";
import { HomeAssistant, LockEntity, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/button";
import "../../shared/card";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import "./controls/lock-buttons-control";
import { LockCardConfig } from "./lock-card-config";
export declare class LockCard extends MushroomBaseCard<LockCardConfig, LockEntity> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<LockCardConfig>;
    protected get hasControls(): boolean;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    renderIcon(stateObj: LockEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
