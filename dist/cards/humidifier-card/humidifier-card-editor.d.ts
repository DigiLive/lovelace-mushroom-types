import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { HumidifierCardConfig } from "./humidifier-card-config";
export declare class HumidifierCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: HumidifierCardConfig): void;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
