import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class StateItem extends LitElement {
    primary?: string | TemplateResult<1>;
    secondary?: string | TemplateResult<1>;
    multiline_secondary?: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
