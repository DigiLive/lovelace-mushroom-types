import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { LegacyTemplateCardConfig } from "./legacy-template-card-config";
export declare const TEMPLATE_LABELS: string[];
export declare class TemplateCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: LegacyTemplateCardConfig): void;
    private _computeLabel;
    private _computeHelper;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
