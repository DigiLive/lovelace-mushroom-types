import { ActionConfig } from "../../../data/lovelace";
import { HomeAssistant } from "../../../types";
export type ActionConfigParams = {
    entity?: string;
    camera_image?: string;
    hold_action?: ActionConfig;
    tap_action?: ActionConfig;
    double_tap_action?: ActionConfig;
};
export declare const handleAction: (node: HTMLElement, _hass: HomeAssistant, config: ActionConfigParams, action: string) => Promise<void>;
type ActionParams = {
    config: ActionConfigParams;
    action: string;
};
declare global {
    interface HASSDomEvents {
        "hass-action": ActionParams;
    }
}
export {};
