import { ActionConfig } from "../../ha";
import { HaFormSchema } from "../../utils/form/ha-form";
import { UiAction } from "../../utils/form/ha-selector";
export declare const actionsSharedConfigStruct: import("superstruct").Struct<{
    hold_action?: any;
    tap_action?: any;
    double_tap_action?: any;
}, {
    tap_action: import("superstruct").Struct<any, null>;
    hold_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
}>;
export type ActionsSharedConfig = {
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
};
export declare const computeActionsFormSchema: (actions?: UiAction[]) => HaFormSchema[];
