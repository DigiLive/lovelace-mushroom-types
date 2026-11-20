import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { PersonCardConfig } from "./person-card-config";
export declare class SwitchCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: PersonCardConfig): void;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
