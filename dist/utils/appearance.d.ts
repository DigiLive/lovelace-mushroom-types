import { Appearance, AppearanceSharedConfig } from "../shared/config/appearance-config";
type AdditionalConfig = {
    [key: string]: any;
};
export declare function computeAppearance(config: AppearanceSharedConfig & AdditionalConfig): Appearance;
export {};
