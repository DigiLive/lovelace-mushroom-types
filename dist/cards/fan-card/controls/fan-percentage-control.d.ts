import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import "../../../shared/slider";
export declare class FanPercentageControl extends LitElement {
    hass: HomeAssistant;
    entity: HassEntity;
    onChange(e: CustomEvent<{
        value: number;
    }>): void;
    onCurrentChange(e: CustomEvent<{
        value?: number;
    }>): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
