import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class Button extends LitElement {
    title: string;
    disabled: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
