import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import "../../../shared/slider";
export declare class FanPercentageControl extends LitElement {
    hass: HomeAssistant;
    entity: HassEntity;
    private _onTap;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
