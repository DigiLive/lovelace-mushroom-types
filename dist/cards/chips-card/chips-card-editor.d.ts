import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import "../../utils/lovelace/sub-element-editor";
import { ChipsCardConfig } from "./chips-card";
import "./chips-card-chips-editor";
export declare class ChipsCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    private _subElementEditorConfig?;
    connectedCallback(): void;
    setConfig(config: ChipsCardConfig): void;
    get _title(): string;
    get _theme(): string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _alignmentChanged;
    private _valueChanged;
    private _handleSubElementChanged;
    private _editDetailElement;
    private _goBack;
}
