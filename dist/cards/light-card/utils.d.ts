import { LightEntity } from "../../ha";
export declare function getBrightness(entity: LightEntity): number | undefined;
export declare function getColorTemp(entity: LightEntity): number | undefined;
export declare function getRGBColor(entity: LightEntity): number[] | undefined;
export declare function improveColorContrast(rgbColor: number[]): number[];
export declare function supportsColorTempControl(entity: LightEntity): boolean;
export declare function supportsColorControl(entity: LightEntity): boolean;
export declare function supportsBrightnessControl(entity: LightEntity): boolean;
