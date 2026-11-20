import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../ha";
import { LovelaceChip, WeatherChipConfig } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare class WeatherChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(hass: HomeAssistant): Promise<WeatherChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: WeatherChipConfig): void;
    private _handleAction;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
