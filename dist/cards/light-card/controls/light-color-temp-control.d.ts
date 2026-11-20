import { LitElement, TemplateResult, type CSSResultGroup } from "lit";
import { HomeAssistant, LightEntity } from "../../../ha";
import "../../../shared/slider";
export declare const generateColorTemperatureGradient: (min: number, max: number) => string;
export declare class LightColorTempControl extends LitElement {
    hass: HomeAssistant;
    entity: LightEntity;
    onChange(e: CustomEvent<{
        value: number;
    }>): void;
    private _generateTemperatureGradient;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
