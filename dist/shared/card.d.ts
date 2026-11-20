import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { Appearance } from "./config/appearance-config";
export declare class Card extends LitElement {
    appearance?: Appearance;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
