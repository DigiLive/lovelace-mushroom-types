import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export declare const STATE_ON = "on";
export declare const STATE_OFF = "off";
export declare const STATE_CLEANING = "cleaning";
export declare const STATE_DOCKED = "docked";
export declare const STATE_IDLE = "idle";
export declare const STATE_PAUSED = "paused";
export declare const STATE_RETURNING = "returning";
export declare const STATE_ERROR = "error";
export declare const VACUUM_SUPPORT_TURN_ON = 1;
export declare const VACUUM_SUPPORT_TURN_OFF = 2;
export declare const VACUUM_SUPPORT_PAUSE = 4;
export declare const VACUUM_SUPPORT_STOP = 8;
export declare const VACUUM_SUPPORT_RETURN_HOME = 16;
export declare const VACUUM_SUPPORT_STATUS = 128;
export declare const VACUUM_SUPPORT_LOCATE = 512;
export declare const VACUUM_SUPPORT_CLEAN_SPOT = 1024;
export declare const VACUUM_SUPPORT_MAP = 2048;
export declare const VACUUM_SUPPORT_STATE = 4096;
export declare const VACUUM_SUPPORT_START = 8192;
interface VacuumEntityAttributes extends HassEntityAttributeBase {
    battery_level: number;
    fan_speed: any;
    [key: string]: any;
}
export interface VacuumEntity extends HassEntityBase {
    attributes: VacuumEntityAttributes;
}
export {};
