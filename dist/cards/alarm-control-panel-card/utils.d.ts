import { HassEntity } from "home-assistant-js-websocket";
export declare function getStateColor(state: string): string;
export declare function getStateService(state: string): string | undefined;
export declare function shouldPulse(state: string): boolean;
export declare function isActionsAvailable(stateObj: HassEntity): boolean;
export declare function isDisarmed(stateObj: HassEntity): boolean;
export declare function hasCode(stateObj: HassEntity): boolean;
