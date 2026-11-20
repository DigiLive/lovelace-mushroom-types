import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../ha";
import { AlarmControlPanelChipConfig, EntityChipConfig, LovelaceChip } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare class AlarmControlPanelChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<AlarmControlPanelChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityChipConfig): void;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
