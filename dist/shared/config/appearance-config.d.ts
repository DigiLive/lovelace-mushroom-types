import { Infer } from "superstruct";
import setupCustomlocalize from "../../localize";
import { HaFormSchema } from "../../utils/form/ha-form";
import { IconType, Info } from "../../utils/info";
import { Layout } from "../../utils/layout";
export declare const appearanceSharedConfigStruct: import("superstruct").Struct<{
    layout: "default" | "horizontal" | "vertical";
    fill_container: boolean;
    primary_info: "none" | "state" | "name" | "last-changed" | "last-updated";
    secondary_info: "none" | "state" | "name" | "last-changed" | "last-updated";
    icon_type: "none" | "icon" | "entity-picture";
}, {
    layout: import("superstruct").Struct<"default" | "horizontal" | "vertical", null>;
    fill_container: import("superstruct").Struct<boolean, null>;
    primary_info: import("superstruct").Struct<"none" | "state" | "name" | "last-changed" | "last-updated", {
        none: "none";
        state: "state";
        name: "name";
        "last-changed": "last-changed";
        "last-updated": "last-updated";
    }>;
    secondary_info: import("superstruct").Struct<"none" | "state" | "name" | "last-changed" | "last-updated", {
        none: "none";
        state: "state";
        name: "name";
        "last-changed": "last-changed";
        "last-updated": "last-updated";
    }>;
    icon_type: import("superstruct").Struct<"none" | "icon" | "entity-picture", {
        none: "none";
        icon: "icon";
        "entity-picture": "entity-picture";
    }>;
}>;
export type AppearanceSharedConfig = Infer<typeof appearanceSharedConfigStruct>;
export type Appearance = {
    layout: Layout;
    fill_container: boolean;
    primary_info: Info;
    secondary_info: Info;
    icon_type: IconType;
};
type CustomLocalize = ReturnType<typeof setupCustomlocalize>;
export declare function computeInfoOptions(customLocalize: CustomLocalize): {
    value: "none" | "state" | "name" | "last-changed" | "last-updated";
    label: string;
}[];
export declare function computeIconTypeOptions(customLocalize: CustomLocalize): {
    value: "none" | "icon" | "entity-picture";
    label: string;
}[];
export declare function computeAlignmentOptions(customLocalize: CustomLocalize): {
    value: "start" | "center" | "end" | "justify";
    label: string;
}[];
export declare function computeLayoutOptions(customLocalize: CustomLocalize): {
    value: "default" | "horizontal" | "vertical";
    label: string;
}[];
export declare function computeAppearanceFormSchema(customLocalize: CustomLocalize): HaFormSchema[];
export {};
