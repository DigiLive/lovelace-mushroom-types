import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { HomeAssistant, LovelaceBadge, LovelaceBadgeEditor } from "../../ha";
import { TemplateBadgeConfig } from "./template-badge-config";
declare const TEMPLATE_KEYS: readonly ["icon", "color", "label", "content", "picture"];
type TemplateKey = (typeof TEMPLATE_KEYS)[number];
export declare class MushroomTemplateBadge extends LitElement implements LovelaceBadge {
    static getConfigElement(): Promise<LovelaceBadgeEditor>;
    static getStubConfig(_hass: HomeAssistant): Promise<TemplateBadgeConfig>;
    hass?: HomeAssistant;
    protected _config?: TemplateBadgeConfig;
    private _templateResults?;
    private _unsubRenderTemplates;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _computeCacheKey;
    protected willUpdate(_changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _tryConnect;
    private _tryConnectKey;
    private _tryDisconnect;
    private _tryDisconnectKey;
    setConfig(config: TemplateBadgeConfig): void;
    get hasAction(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    isTemplate(key: TemplateKey): boolean;
    private getValue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "mushroom-template-badge": MushroomTemplateBadge;
    }
}
export {};
