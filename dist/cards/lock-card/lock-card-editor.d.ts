import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { LockCardConfig } from "./lock-card-config";
export declare class LockCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: LockCardConfig): void;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
