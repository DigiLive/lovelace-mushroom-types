import { LitElement, nothing } from "lit";
import { LovelaceCardEditor, type HomeAssistant } from "../../ha";
import { TemplateCardConfig } from "./template-card-config";
export declare const TEMPLATE_CARD_LABELS: string[];
export declare const TILE_LABELS: string[];
export declare const TEMPLATE_CARD_HELPERS: string[];
export declare class MushroomTemplateCardEditor extends LitElement implements LovelaceCardEditor {
    hass: HomeAssistant;
    private _config?;
    private _legacyConfig?;
    connectedCallback(): void;
    setConfig(config: TemplateCardConfig): void;
    private _featureContext;
    private _schema;
    private _featuresSchema;
    private _computeLabel;
    private _computeHelper;
    private _done;
    private _revertToLegacy;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _featuresChanged;
    private _editDetailElement;
    private _updateFeature;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "mushroom-template-card-editor": MushroomTemplateCardEditor;
    }
}
