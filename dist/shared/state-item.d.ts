import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { Appearance } from "./config/appearance-config";
import "./shape-icon";
export declare class StateItem extends LitElement {
    appearance?: Appearance;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
