import { LovelaceChipConfig } from "./chip/types";
import { MushroomElementEditor } from "./element-editor";
import { LovelaceChipEditor } from "./types";
export declare class MushroomChipElementEditor extends MushroomElementEditor<LovelaceChipConfig> {
    protected get configElementType(): string | undefined;
    protected getConfigElement(): Promise<LovelaceChipEditor | undefined>;
}
export declare const getChipElementClass: (type: string) => CustomElementConstructor;
