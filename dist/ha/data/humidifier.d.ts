import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export type HumidifierAction = "off" | "humidifying" | "dehumidifying" | "idle";
export type HumidifierEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        humidity?: number;
        current_humidity?: number;
        min_humidity?: number;
        max_humidity?: number;
        action: HumidifierAction;
        mode?: string;
        available_modes?: string[];
    };
};
export declare const HUMIDIFIER_SUPPORT_MODES = 1;
export declare const HUMIDIFIER_STATE_ON = "on";
export declare const HUMIDIFIER_STATE_OFF = "off";
export declare const HUMIDIFIER_DEVICE_CLASS_HUMIDIFIER = "humidifier";
export declare const HUMIDIFIER_DEVICE_CLASS_DEHUMIDIFIER = "dehumidifier";
