export declare const LAYOUTS: readonly ["default", "horizontal", "vertical"];
export type Layout = (typeof LAYOUTS)[number];
export declare const layoutStruct: import("superstruct").Struct<"default" | "horizontal" | "vertical", null>;
