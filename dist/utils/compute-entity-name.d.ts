import { HassEntity } from "home-assistant-js-websocket";
import { EntityNameItem, HomeAssistant } from "../ha";
export declare function computeEntityName(hass: HomeAssistant, stateObj: HassEntity, name: string | EntityNameItem | EntityNameItem[] | undefined): string;
