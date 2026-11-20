import { CSSResultGroup, nothing, PropertyValues } from "lit";
import { MushroomBaseElement } from "../../utils/base-element";
import { LovelaceChipConfig } from "../../utils/lovelace/chip/types";
declare global {
    interface HASSDomEvents {
        "chips-changed": {
            chips: LovelaceChipConfig[];
        };
    }
}
export declare class ChipsCardEditorChips extends MushroomBaseElement {
    protected chips?: LovelaceChipConfig[];
    protected label?: string;
    private _attached;
    private _renderEmptySortable;
    private _selectorKey;
    private _sortable?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    private _handleChipsChanged;
    private _createSortable;
    private _addChips;
    private _chipMoved;
    private _removeChip;
    private _editChip;
    private _renderChipLabel;
    private _renderChipSecondary;
    private getEntityName;
    static get styles(): CSSResultGroup;
}
