import { Infer } from "superstruct";
import { EntityNameItem } from "../../ha";
export declare const entityNameStruct: import("superstruct").Struct<string | {
    type: "entity" | "device" | "area" | "floor";
} | {
    text: string;
    type: "text";
} | ({
    type: "entity" | "device" | "area" | "floor";
} | {
    text: string;
    type: "text";
})[], null>;
export declare const entitySharedConfigStruct: import("superstruct").Struct<{
    entity: string;
    name: string | {
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    } | ({
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    })[];
    icon: string;
}, {
    entity: import("superstruct").Struct<string, null>;
    name: import("superstruct").Struct<string | {
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    } | ({
        type: "entity" | "device" | "area" | "floor";
    } | {
        text: string;
        type: "text";
    })[], null>;
    icon: import("superstruct").Struct<string, null>;
}>;
export type EntitySharedConfig = Omit<Infer<typeof entitySharedConfigStruct>, "name"> & {
    name?: string | EntityNameItem | EntityNameItem[];
};
