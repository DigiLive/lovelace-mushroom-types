import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { CoverEntity, HomeAssistant } from "../../../ha";
import "../../../shared/slider";
export declare class CoverPositionControl extends LitElement {
    hass: HomeAssistant;
    entity: CoverEntity;
    private onChange;
    onCurrentChange(e: CustomEvent<{
        value?: number;
    }>): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
