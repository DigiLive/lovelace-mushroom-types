import { nothing } from "lit";
import { LovelaceCardEditor } from "../../ha";
import { MushroomBaseElement } from "../../utils/base-element";
import { AlarmControlPanelCardConfig } from "./alarm-control-panel-card-config";
export declare class SwitchCardEditor extends MushroomBaseElement implements LovelaceCardEditor {
    private _config?;
    connectedCallback(): void;
    setConfig(config: AlarmControlPanelCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _computeLabel;
    private _valueChanged;
}
