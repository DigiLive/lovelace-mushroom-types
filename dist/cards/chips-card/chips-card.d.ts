import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from "../../ha";
import "../../shared/chip";
import { LovelaceChipConfig } from "../../utils/lovelace/chip/types";
import "./chips";
export interface ChipsCardConfig extends LovelaceCardConfig {
    chips: LovelaceChipConfig[];
    alignment?: string;
}
export declare class ChipsCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(_hass: HomeAssistant): Promise<ChipsCardConfig>;
    preview?: boolean;
    editMode?: boolean;
    private _config?;
    private _hass?;
    set hass(hass: HomeAssistant);
    getCardSize(): number | Promise<number>;
    setConfig(config: ChipsCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private renderChip;
    static get styles(): CSSResultGroup;
}
