import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant, LightEntity } from "../../../ha";
import "../../../shared/slider";
export declare class LightBrighnessControl extends LitElement {
    hass: HomeAssistant;
    entity: LightEntity;
    onChange(e: CustomEvent<{
        value: number;
    }>): void;
    onCurrentChange(e: CustomEvent<{
        value?: number;
    }>): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
