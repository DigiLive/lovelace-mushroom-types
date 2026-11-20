import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { CoverCardConfig } from "./cover-card-config";
export declare class CoverCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: CoverCardConfig): void;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
