import { LitElement, nothing } from "lit";
import { LovelaceBadgeEditor, type HomeAssistant } from "../../ha";
import { TemplateBadgeConfig } from "./template-badge-config";
export declare const TEMPLATE_BADGE_LABELS: string[];
export declare const TEMPLATE_BADGE_HELPERS: string[];
export declare class MushroomTemplateBadgeEditor extends LitElement implements LovelaceBadgeEditor {
    hass: HomeAssistant;
    private _config?;
    connectedCallback(): void;
    setConfig(config: TemplateBadgeConfig): void;
    private _computeLabel;
    private _computeHelper;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "mushroom-template-badge-editor": MushroomTemplateBadgeEditor;
    }
}
