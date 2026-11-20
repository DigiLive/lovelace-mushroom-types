import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { HomeAssistant } from "../ha";
import "../shared/badge-icon";
import "../shared/card";
import "../shared/shape-avatar";
import "../shared/shape-icon";
import "../shared/state-info";
import "../shared/state-item";
export declare function computeDarkMode(hass?: HomeAssistant): boolean;
export declare class MushroomBaseElement extends LitElement {
    hass: HomeAssistant;
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
}
