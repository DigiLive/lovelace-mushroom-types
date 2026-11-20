import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { FrontendLocaleData } from "../ha";
export declare class InputNumber extends LitElement {
    locale: FrontendLocaleData;
    disabled: boolean;
    value?: number;
    step?: number;
    min?: number;
    max?: number;
    formatOptions: Intl.NumberFormatOptions;
    pending: boolean;
    private get _precision();
    private get _step();
    private _incrementValue;
    private _decrementValue;
    private container;
    private dispatchValue;
    private debounceDispatchValue;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _processNewValue;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
