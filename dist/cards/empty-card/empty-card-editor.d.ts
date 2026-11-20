import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
export declare class EntityCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    setConfig(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
