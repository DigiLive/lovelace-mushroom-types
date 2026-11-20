import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../ha";
import { BackChipConfig, LovelaceChip } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare const DEFAULT_BACK_ICON = "mdi:arrow-left";
export declare class BackChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(_hass: HomeAssistant): Promise<BackChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: BackChipConfig): void;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
