import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import { EntityChipConfig, LovelaceChip } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare class EntityChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<EntityChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityChipConfig): void;
    private _handleAction;
    protected render(): TemplateResult<1> | typeof nothing;
    renderIcon(stateObj: HassEntity, icon: string | undefined, iconColor: string | undefined, active: boolean): TemplateResult;
    static get styles(): CSSResultGroup;
}
