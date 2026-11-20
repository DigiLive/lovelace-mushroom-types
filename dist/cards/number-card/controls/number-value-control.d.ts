import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import "../../../shared/slider";
import "../../../shared/input-number";
export declare class NumberValueControl extends LitElement {
    hass: HomeAssistant;
    entity: HassEntity;
    displayMode?: "slider" | "buttons";
    private _currentValue?;
    private _pendingState?;
    onChange(e: CustomEvent<{
        value: number;
    }>): void;
    onSliderChange(e: CustomEvent<{
        value: number;
    }>): void;
    onCurrentChange(e: CustomEvent<{
        value?: number;
    }>): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _setPreview;
    private _clearPreview;
    private _dispatchCurrentChange;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
