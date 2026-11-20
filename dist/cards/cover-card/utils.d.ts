import { CoverEntity } from "../../ha";
export declare function supportsButtonsControl(entity: CoverEntity): boolean;
export declare function supportsPositionControl(entity: CoverEntity): boolean;
export declare function supportsTiltPositionControl(entity: CoverEntity): boolean;
export declare function getPosition(entity: CoverEntity): number;
export declare function getTiltPosition(entity: CoverEntity): number;
export declare function getStateColor(entity: CoverEntity): "var(--rgb-state-cover-open)" | "var(--rgb-state-cover-closed)" | "var(--rgb-disabled)";
