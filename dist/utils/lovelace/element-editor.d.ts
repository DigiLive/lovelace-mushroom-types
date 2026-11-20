import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant, LovelaceCardConfig, LovelaceConfig } from "../../ha";
import { LovelaceChipConfig } from "./chip/types";
import { EditDetailElementEvent, EditSubElementEvent, GUIModeChangedEvent } from "./editor/types";
import { LovelaceGenericElementEditor } from "./types";
export interface ConfigChangedEvent {
    config: LovelaceCardConfig | LovelaceChipConfig;
    error?: string;
    guiModeAvailable?: boolean;
}
declare global {
    interface HASSDomEvents {
        "config-changed": ConfigChangedEvent;
        "GUImode-changed": GUIModeChangedEvent;
        "edit-detail-element": EditDetailElementEvent;
        "edit-sub-element": EditSubElementEvent;
    }
}
export interface UIConfigChangedEvent extends Event {
    detail: {
        config: LovelaceCardConfig | LovelaceChipConfig;
    };
}
export declare abstract class MushroomElementEditor<T> extends LitElement {
    hass: HomeAssistant;
    lovelace?: LovelaceConfig;
    private _yaml?;
    private _config?;
    private _configElement?;
    private _configElementType?;
    private _guiMode;
    private _errors?;
    private _warnings?;
    private _guiSupported?;
    private _loading;
    _yamlEditor?: any /**HaCodeEditor**/;
    get yaml(): string;
    set yaml(_yaml: string);
    get value(): T | undefined;
    set value(config: T | undefined);
    private _setConfig;
    get hasWarning(): boolean;
    get hasError(): boolean;
    get GUImode(): boolean;
    set GUImode(guiMode: boolean);
    toggleMode(): void;
    focusYamlEditor(): void;
    protected getConfigElement(): Promise<LovelaceGenericElementEditor | undefined>;
    protected get configElementType(): string | undefined;
    protected render(): TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    private _handleUIConfigChanged;
    private _handleYAMLChanged;
    private _updateConfigElement;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
}
