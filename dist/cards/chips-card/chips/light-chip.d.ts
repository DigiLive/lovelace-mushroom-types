import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../ha";
import { LightChipConfig, LovelaceChip } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare class LightChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<LightChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: LightChipConfig): void;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
