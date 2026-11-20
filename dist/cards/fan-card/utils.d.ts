import { HassEntity } from "home-assistant-js-websocket";
export declare function supportsPercentageControl(stateObj: HassEntity): boolean;
export declare function supportsOscillateControl(stateObj: HassEntity): boolean;
export declare function supportsDirectionControl(stateObj: HassEntity): boolean;
export declare function getPercentage(stateObj: HassEntity): number;
export declare function isOscillating(stateObj: HassEntity): boolean;
export declare function computePercentageStep(stateObj: HassEntity): any;
