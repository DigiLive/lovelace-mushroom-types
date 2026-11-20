import { LitElement, TemplateResult } from "lit";
import { ClimateEntity, HomeAssistant } from "../../../ha";
import "../../../shared/button";
import "../../../shared/button-group";
import "../../../shared/input-number";
export declare const isTemperatureControlVisible: (entity: ClimateEntity) => boolean;
export declare class ClimateTemperatureControl extends LitElement {
    hass: HomeAssistant;
    entity: ClimateEntity;
    fill: boolean;
    private get _stepSize();
    private _supportsTarget;
    private _supportsTargetRange;
    onValueChange(e: CustomEvent<{
        value: number;
    }>): void;
    onLowValueChange(e: CustomEvent<{
        value: number;
    }>): void;
    onHighValueChange(e: CustomEvent<{
        value: number;
    }>): void;
    protected render(): TemplateResult;
}
