import { HvacAction, HvacMode } from "../../ha";
export declare const CLIMATE_HVAC_MODE_COLORS: Record<HvacMode, string>;
export declare const CLIMATE_HVAC_ACTION_COLORS: Record<HvacAction, string>;
export declare const CLIMATE_HVAC_MODE_ICONS: Record<HvacMode, string>;
export declare const CLIMATE_HVAC_ACTION_ICONS: Record<HvacAction, string>;
export declare function getHvacModeColor(hvacMode: HvacMode): string;
export declare function getHvacActionColor(hvacAction: HvacAction): string;
export declare function getHvacModeIcon(hvacMode: HvacMode): string;
export declare function getHvacActionIcon(hvacAction: HvacAction): string | undefined;
