import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "hammerjs";
export declare const DEFAULT_SLIDER_THRESHOLD = 10;
export declare class SliderItem extends LitElement {
    disabled: boolean;
    inactive: boolean;
    showActive?: boolean;
    showIndicator?: boolean;
    value?: number;
    step: number;
    min: number;
    max: number;
    private _mc?;
    controlled: boolean;
    valueToPercentage(value: number): number;
    percentageToValue(value: number): number;
    protected firstUpdated(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private slider;
    setupListeners(): void;
    destroyListeners(): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
