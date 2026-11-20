import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import "../../../shared/slider";
export declare class LightColorControl extends LitElement {
    hass: HomeAssistant;
    entity: HassEntity;
    _percent: number;
    _percentToRGB(percent: number): number[];
    _rgbToPercent(rgb: number[]): number;
    onChange(e: CustomEvent<{
        value: number;
    }>): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
