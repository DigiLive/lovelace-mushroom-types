import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement } from "lit";
import { HomeAssistant } from "../../../ha";
export declare class SelectOptionControl extends LitElement {
    hass: HomeAssistant;
    entity: HassEntity;
    _selectChanged(ev: any): void;
    _setValue(option: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
