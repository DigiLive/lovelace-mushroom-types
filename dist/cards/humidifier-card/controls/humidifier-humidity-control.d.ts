import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant, HumidifierEntity } from "../../../ha";
import "../../../shared/slider";
export declare class HumidifierHumidityControl extends LitElement {
    hass: HomeAssistant;
    entity: HumidifierEntity;
    color: string | undefined;
    onChange(e: CustomEvent<{
        value: number;
    }>): void;
    onCurrentChange(e: CustomEvent<{
        value?: number;
    }>): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
