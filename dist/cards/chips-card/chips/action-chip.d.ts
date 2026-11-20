import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../ha";
import { ActionChipConfig, LovelaceChip } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare const DEFAULT_ACTION_ICON = "mdi:flash";
export declare class ActionChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(_hass: HomeAssistant): Promise<ActionChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ActionChipConfig): void;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
