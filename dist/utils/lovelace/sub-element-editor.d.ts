import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../ha";
import "./chip-element-editor";
import { SubElementEditorConfig } from "./editor/types";
declare global {
    interface HASSDomEvents {
        "go-back": undefined;
    }
}
export declare class MushroomSubElementEditor extends LitElement {
    hass: HomeAssistant;
    config: SubElementEditorConfig;
    private _guiModeAvailable;
    private _guiMode;
    private _editorElement?;
    protected render(): TemplateResult;
    private _goBack;
    private _toggleMode;
    private _handleGUIModeChanged;
    private _handleConfigChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sub-element-editor": MushroomSubElementEditor;
    }
}
