import { ActionConfig, LovelaceCardConfig } from "../../ha";
import { LovelaceCardFeatureConfig } from "../../ha/panels/lovelace/card-features/types";
export type TemplateCardConfig = LovelaceCardConfig & {
    entity?: string;
    area?: string;
    primary?: string;
    secondary?: string;
    color?: string;
    icon?: string;
    picture?: string;
    badge_icon?: string;
    badge_text?: string;
    badge_color?: string;
    vertical?: boolean;
    multiline_secondary?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    icon_tap_action?: ActionConfig;
    icon_hold_action?: ActionConfig;
    icon_double_tap_action?: ActionConfig;
    features?: LovelaceCardFeatureConfig[];
    features_position?: "bottom" | "inline";
    entity_id?: string | string[];
    /**
     * @deprecated Use color instead
     */
    icon_color?: string;
    /**
     * @deprecated Use vertical instead
     */
    layout?: string;
    /**
     * @deprecated Use grid_options instead
     */
    fill_container?: boolean;
};
export declare const templateCardConfigStruct: import("superstruct").Struct<{
    entity: string;
    area: string;
    type: string;
    index: number;
    view_index: number;
    icon: string;
    entity_id: string | string[];
    picture: string;
    color: string;
    vertical: boolean;
    layout: string;
    fill_container: boolean;
    primary: string;
    secondary: string;
    multiline_secondary: boolean;
    icon_color: string;
    badge_icon: string;
    badge_color: string;
    badge_text: string;
    features: any[];
    features_position: "bottom" | "inline";
    hold_action?: any;
    tap_action?: any;
    double_tap_action?: any;
    view_layout?: any;
    layout_options?: any;
    grid_options?: any;
    visibility?: any;
    icon_tap_action?: any;
    icon_hold_action?: any;
    icon_double_tap_action?: any;
}, {
    entity: import("superstruct").Struct<string, null>;
    area: import("superstruct").Struct<string, null>;
    primary: import("superstruct").Struct<string, null>;
    secondary: import("superstruct").Struct<string, null>;
    color: import("superstruct").Struct<string, null>;
    icon: import("superstruct").Struct<string, null>;
    picture: import("superstruct").Struct<string, null>;
    badge_icon: import("superstruct").Struct<string, null>;
    badge_text: import("superstruct").Struct<string, null>;
    badge_color: import("superstruct").Struct<string, null>;
    vertical: import("superstruct").Struct<boolean, null>;
    multiline_secondary: import("superstruct").Struct<boolean, null>;
    tap_action: import("superstruct").Struct<any, null>;
    hold_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
    icon_tap_action: import("superstruct").Struct<any, null>;
    icon_hold_action: import("superstruct").Struct<any, null>;
    icon_double_tap_action: import("superstruct").Struct<any, null>;
    features: import("superstruct").Struct<any[], import("superstruct").Struct<any, null>>;
    features_position: import("superstruct").Struct<"bottom" | "inline", {
        bottom: "bottom";
        inline: "inline";
    }>;
    entity_id: import("superstruct").Struct<string | string[], null>;
    icon_color: import("superstruct").Struct<string, null>;
    layout: import("superstruct").Struct<string, null>;
    fill_container: import("superstruct").Struct<boolean, null>;
    type: import("superstruct").Struct<string, null>;
    index: import("superstruct").Struct<number, null>;
    view_index: import("superstruct").Struct<number, null>;
    view_layout: import("superstruct").Struct<any, null>;
    layout_options: import("superstruct").Struct<any, null>;
    grid_options: import("superstruct").Struct<any, null>;
    visibility: import("superstruct").Struct<any, null>;
}>;
export declare const migrateTemplateCardConfig: (config: TemplateCardConfig) => TemplateCardConfig;
export declare const templateCardNeedsMigration: (config: TemplateCardConfig) => boolean;
