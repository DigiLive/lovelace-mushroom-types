export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "none" | "toggle" | "call-service" | "perform-action" | "navigate" | "url" | "more-info" | "assist";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"none" | "toggle" | "call-service" | "perform-action" | "navigate" | "url" | "more-info" | "assist", {
        none: "none";
        toggle: "toggle";
        "call-service": "call-service";
        "perform-action": "perform-action";
        navigate: "navigate";
        url: "url";
        "more-info": "more-info";
        assist: "assist";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    }, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
