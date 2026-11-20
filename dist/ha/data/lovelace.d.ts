import { Connection, HassServiceTarget } from "home-assistant-js-websocket";
import { HASSDomEvent } from "../common/dom/fire_event";
import { Lovelace, LovelaceCard } from "../panels/lovelace/types";
import { HomeAssistant } from "../types";
export interface LovelacePanelConfig {
    mode: "yaml" | "storage";
}
export interface LovelaceConfig {
    title?: string;
    strategy?: {
        type: string;
        options?: Record<string, unknown>;
    };
    views: LovelaceViewConfig[];
    background?: string;
}
export interface LegacyLovelaceConfig extends LovelaceConfig {
    resources?: LovelaceResource[];
}
export interface LovelaceResource {
    id: string;
    type: "css" | "js" | "module" | "html";
    url: string;
}
export interface LovelaceResourcesMutableParams {
    res_type: LovelaceResource["type"];
    url: string;
}
export type LovelaceDashboard = LovelaceYamlDashboard | LovelaceStorageDashboard;
interface LovelaceGenericDashboard {
    id: string;
    url_path: string;
    require_admin: boolean;
    show_in_sidebar: boolean;
    icon?: string;
    title: string;
}
export interface LovelaceYamlDashboard extends LovelaceGenericDashboard {
    mode: "yaml";
    filename: string;
}
export interface LovelaceStorageDashboard extends LovelaceGenericDashboard {
    mode: "storage";
}
export interface LovelaceDashboardMutableParams {
    require_admin: boolean;
    show_in_sidebar: boolean;
    icon?: string;
    title: string;
}
export interface LovelaceDashboardCreateParams extends LovelaceDashboardMutableParams {
    url_path: string;
    mode: "storage";
}
export interface LovelaceViewConfig {
    index?: number;
    title?: string;
    type?: string;
    strategy?: {
        type: string;
        options?: Record<string, unknown>;
    };
    cards?: LovelaceCardConfig[];
    path?: string;
    icon?: string;
    theme?: string;
    panel?: boolean;
    background?: string;
    visible?: boolean | ShowViewConfig[];
}
export interface LovelaceViewElement extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    narrow?: boolean;
    index?: number;
    cards?: Array<LovelaceCard>;
    isStrategy: boolean;
    setConfig(config: LovelaceViewConfig): void;
}
export interface ShowViewConfig {
    user?: string;
}
export interface LovelaceBadgeConfig {
    type?: string;
    [key: string]: any;
}
export interface LovelaceCardConfig {
    index?: number;
    view_index?: number;
    view_layout?: any;
    type: string;
    [key: string]: any;
}
export interface LovelaceLayoutOptions {
    grid_columns?: number;
    grid_rows?: number;
}
export interface LovelaceGridOptions {
    columns?: number;
    rows?: number;
    min_columns?: number;
    max_columns?: number;
    min_rows?: number;
    max_rows?: number;
}
export interface ToggleActionConfig extends BaseActionConfig {
    action: "toggle";
}
export interface CallServiceActionConfig extends BaseActionConfig {
    action: "call-service" | "perform-action";
    /** @deprecated "service" is kept for backwards compatibility. Replaced by "perform_action". */
    service?: string;
    perform_action: string;
    target?: HassServiceTarget;
    /** @deprecated "service_data" is kept for backwards compatibility. Replaced by "data". */
    service_data?: Record<string, unknown>;
    data?: Record<string, unknown>;
}
export interface NavigateActionConfig extends BaseActionConfig {
    action: "navigate";
    navigation_path: string;
    navigation_replace?: boolean;
}
export interface UrlActionConfig extends BaseActionConfig {
    action: "url";
    url_path: string;
}
export interface MoreInfoActionConfig extends BaseActionConfig {
    action: "more-info";
    entity?: string;
}
export interface NoActionConfig extends BaseActionConfig {
    action: "none";
}
export interface CustomActionConfig extends BaseActionConfig {
    action: "fire-dom-event";
}
export interface AssistActionConfig extends BaseActionConfig {
    action: "assist";
    pipeline_id?: string;
    start_listening?: boolean;
}
export interface BaseActionConfig {
    action: string;
    confirmation?: ConfirmationRestrictionConfig;
}
export interface ConfirmationRestrictionConfig {
    text?: string;
    exemptions?: RestrictionConfig[];
}
export interface RestrictionConfig {
    user: string;
}
export type ActionConfig = ToggleActionConfig | CallServiceActionConfig | NavigateActionConfig | UrlActionConfig | MoreInfoActionConfig | AssistActionConfig | NoActionConfig | CustomActionConfig;
export declare const fetchResources: (conn: Connection) => Promise<LovelaceResource[]>;
export declare const createResource: (hass: HomeAssistant, values: LovelaceResourcesMutableParams) => Promise<LovelaceResource>;
export declare const updateResource: (hass: HomeAssistant, id: string, updates: Partial<LovelaceResourcesMutableParams>) => Promise<LovelaceResource>;
export declare const deleteResource: (hass: HomeAssistant, id: string) => Promise<unknown>;
export declare const fetchDashboards: (hass: HomeAssistant) => Promise<LovelaceDashboard[]>;
export declare const createDashboard: (hass: HomeAssistant, values: LovelaceDashboardCreateParams) => Promise<LovelaceDashboard>;
export declare const updateDashboard: (hass: HomeAssistant, id: string, updates: Partial<LovelaceDashboardMutableParams>) => Promise<LovelaceDashboard>;
export declare const deleteDashboard: (hass: HomeAssistant, id: string) => Promise<unknown>;
export declare const fetchConfig: (conn: Connection, urlPath: string | null, force: boolean) => Promise<LovelaceConfig>;
export declare const saveConfig: (hass: HomeAssistant, urlPath: string | null, config: LovelaceConfig) => Promise<void>;
export declare const deleteConfig: (hass: HomeAssistant, urlPath: string | null) => Promise<void>;
export declare const subscribeLovelaceUpdates: (conn: Connection, urlPath: string | null, onChange: () => void) => Promise<() => Promise<void>>;
export declare const getLovelaceCollection: (conn: Connection, urlPath?: string | null) => import("home-assistant-js-websocket").Collection<LovelaceConfig>;
export declare const getLegacyLovelaceCollection: (conn: Connection) => import("home-assistant-js-websocket").Collection<LovelaceConfig>;
export interface WindowWithLovelaceProm extends Window {
    llConfProm?: Promise<LovelaceConfig>;
    llResProm?: Promise<LovelaceResource[]>;
}
export interface ActionHandlerOptions {
    hasHold?: boolean;
    hasDoubleClick?: boolean;
    hasTap?: boolean;
    disabled?: boolean;
}
export interface ActionHandlerDetail {
    action: "hold" | "tap" | "double_tap";
}
export type ActionHandlerEvent = HASSDomEvent<ActionHandlerDetail>;
export {};
