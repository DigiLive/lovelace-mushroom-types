import { CSSResultGroup, nothing } from "lit";
import { LovelaceCard, LovelaceCardEditor, type LovelaceGridOptions } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
export declare class EmptyCard extends MushroomBaseElement implements LovelaceCard {
    preview: boolean;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
