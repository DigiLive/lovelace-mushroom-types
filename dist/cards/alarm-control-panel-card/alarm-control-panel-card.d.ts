import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, nothing, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor } from "../../ha";
import "../../shared/badge-icon";
import "../../shared/button";
import "../../shared/button-group";
import "../../shared/card";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { MushroomBaseCard } from "../../utils/base-card";
import { AlarmControlPanelCardConfig } from "./alarm-control-panel-card-config";
export declare class AlarmControlPanelCard extends MushroomBaseCard<AlarmControlPanelCardConfig> implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<AlarmControlPanelCardConfig>;
    protected get hasControls(): boolean;
    private _onTap;
    private _handleAction;
    protected render(): TemplateResult | typeof nothing;
    protected renderIcon(stateObj: HassEntity, icon?: string): TemplateResult;
    static get styles(): CSSResultGroup;
}
