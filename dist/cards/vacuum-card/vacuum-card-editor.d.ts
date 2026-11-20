import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { VacuumCardConfig } from "./vacuum-card-config";
export declare class VacuumCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: VacuumCardConfig): void;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
