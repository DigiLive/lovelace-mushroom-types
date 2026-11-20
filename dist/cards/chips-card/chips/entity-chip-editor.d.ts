import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../ha";
import { EntityChipConfig } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare class EntityChipEditor extends LitElement implements LovelaceChipEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityChipConfig): void;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
