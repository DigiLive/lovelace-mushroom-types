import { LitElement, TemplateResult } from "lit";
import { ClimateEntity, HomeAssistant, HvacMode } from "../../../ha";
import "../../../shared/button";
import "../../../shared/button-group";
export declare const isHvacModesVisible: (entity: ClimateEntity, modes?: HvacMode[]) => boolean;
export declare class ClimateHvacModesControl extends LitElement {
    hass: HomeAssistant;
    entity: ClimateEntity;
    modes: HvacMode[];
    fill: boolean;
    private callService;
    protected render(): TemplateResult;
    private renderModeButton;
}
