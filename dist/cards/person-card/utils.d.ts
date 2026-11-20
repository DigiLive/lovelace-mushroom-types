import { HassEntity } from "home-assistant-js-websocket";
export declare function getStateIcon(stateObj: HassEntity, zones: HassEntity[]): string;
export declare function getStateColor(stateObj: HassEntity, zones: HassEntity[]): "var(--rgb-state-person-unknown)" | "var(--rgb-state-person-not-home)" | "var(--rgb-state-person-home)" | "var(--rgb-state-person-zone)";
