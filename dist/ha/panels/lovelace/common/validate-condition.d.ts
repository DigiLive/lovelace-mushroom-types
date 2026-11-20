import { HomeAssistant } from "../../../types";
export interface Condition {
    entity: string;
    state?: string;
    state_not?: string;
}
export declare function checkConditionsMet(conditions: Condition[], hass: HomeAssistant): boolean;
export declare function validateConditionalConfig(conditions: Condition[]): boolean;
