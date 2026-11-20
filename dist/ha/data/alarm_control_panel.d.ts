import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
export declare const enum AlarmControlPanelEntityFeature {
    ARM_HOME = 1,
    ARM_AWAY = 2,
    ARM_NIGHT = 4,
    TRIGGER = 8,
    ARM_CUSTOM_BYPASS = 16,
    ARM_VACATION = 32
}
export type AlarmMode = "armed_home" | "armed_away" | "armed_night" | "armed_vacation" | "armed_custom_bypass" | "disarmed";
interface AlarmControlPanelEntityAttributes extends HassEntityAttributeBase {
    code_format?: "text" | "number";
    changed_by?: string | null;
    code_arm_required?: boolean;
}
export interface AlarmControlPanelEntity extends HassEntityBase {
    attributes: AlarmControlPanelEntityAttributes;
}
type AlarmConfig = {
    service: string;
    feature?: AlarmControlPanelEntityFeature;
    icon: string;
};
export declare const ALARM_MODES: Record<AlarmMode, AlarmConfig>;
export declare const setProtectedAlarmControlPanelMode: (element: HTMLElement, hass: HomeAssistant, stateObj: AlarmControlPanelEntity, mode: AlarmMode) => Promise<void>;
export {};
