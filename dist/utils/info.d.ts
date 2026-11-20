import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../ha";
export declare const INFOS: readonly ["name", "state", "last-changed", "last-updated", "none"];
export type Info = (typeof INFOS)[number];
export declare const ICON_TYPES: readonly ["icon", "entity-picture", "none"];
export type IconType = (typeof ICON_TYPES)[number];
export declare function computeInfoDisplay(info: Info, name: string, state: string, stateObj: HassEntity, hass: HomeAssistant): string | import("lit-html").TemplateResult<1>;
export declare function computeEntityPicture(stateObj: HassEntity, iconType: IconType): string;
