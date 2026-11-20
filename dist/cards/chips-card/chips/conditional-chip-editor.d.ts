import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant, LovelaceConfig } from "../../../ha";
import { ConditionalChipConfig } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare class ConditionalChipEditor extends LitElement implements LovelaceChipEditor {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    private _config?;
    private _GUImode;
    private _guiModeAvailable?;
    private _cardTab;
    connectedCallback(): void;
    private _cardEditorEl?;
    setConfig(config: ConditionalChipConfig): void;
    focusYamlEditor(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _selectTab;
    private _toggleMode;
    private _setMode;
    private _handleGUIModeChanged;
    private _handleChipPicked;
    private _handleChipChanged;
    private _handleReplaceChip;
    private _conditionChanged;
    static get styles(): CSSResultGroup;
}
