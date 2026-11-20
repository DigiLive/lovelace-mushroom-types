import { LitElement, nothing, PropertyValues } from "lit";
import { HomeAssistant, LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../../ha";
import { TemplateCardConfig } from "./template-card-config";
export declare const getEntityDefaultTileIconAction: (entityId: string) => "none" | "toggle";
export interface LovelaceCardFeatureContext {
    entity_id?: string;
    area_id?: string;
}
export declare class MushroomTemplateCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): TemplateCardConfig;
    hass?: HomeAssistant;
    layout?: string;
    private _config?;
    private _templateResults?;
    private _unsubRenderTemplates;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _computeCacheKey;
    protected willUpdate(_changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _getTemplateKeyValue;
    private _tryConnect;
    private _tryConnectKey;
    private _tryDisconnect;
    private _tryDisconnectKey;
    setConfig(config: TemplateCardConfig): void;
    private _featureContext;
    private getValue;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private _handleIconAction;
    private get _hasCardAction();
    private get _hasIconAction();
    private _featurePosition;
    private get _supportsInlineFeaturesBelow();
    private _featureLayout;
    private _featureRows;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "mushroom-template-card": MushroomTemplateCard;
    }
}
