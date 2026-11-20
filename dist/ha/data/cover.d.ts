import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export declare const COVER_SUPPORT_OPEN = 1;
export declare const COVER_SUPPORT_CLOSE = 2;
export declare const COVER_SUPPORT_SET_POSITION = 4;
export declare const COVER_SUPPORT_STOP = 8;
export declare const COVER_SUPPORT_OPEN_TILT = 16;
export declare const COVER_SUPPORT_CLOSE_TILT = 32;
export declare const COVER_SUPPORT_STOP_TILT = 64;
export declare const COVER_SUPPORT_SET_TILT_POSITION = 128;
export declare function isFullyOpen(stateObj: CoverEntity): boolean;
export declare function isFullyClosed(stateObj: CoverEntity): boolean;
export declare function isFullyOpenTilt(stateObj: CoverEntity): boolean;
export declare function isFullyClosedTilt(stateObj: CoverEntity): boolean;
export declare function isOpening(stateObj: CoverEntity): boolean;
export declare function isClosing(stateObj: CoverEntity): boolean;
export declare function isTiltOnly(stateObj: CoverEntity): boolean;
interface CoverEntityAttributes extends HassEntityAttributeBase {
    current_position: number;
    current_tilt_position: number;
}
export interface CoverEntity extends HassEntityBase {
    attributes: CoverEntityAttributes;
}
export {};
