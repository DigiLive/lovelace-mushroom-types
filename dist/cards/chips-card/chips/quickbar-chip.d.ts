import { CSSResultGroup, LitElement, nothing, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import { LovelaceChip, QuickBarMode, QuickBarChipConfig } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare const DEFAULT_QUICKBAR_ICON = "mdi:magnify";
export declare const DEFAULT_QUICKBAR_MODE = QuickBarMode.Entity;
export declare class QuickBarChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(_hass: HomeAssistant): Promise<QuickBarChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: QuickBarChipConfig): void;
    private _handleAction;
    protected render(): TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
