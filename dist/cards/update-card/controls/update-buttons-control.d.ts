import { LitElement, TemplateResult } from "lit";
import { HomeAssistant, UpdateEntity } from "../../../ha";
import "../../../shared/button";
import "../../../shared/button-group";
export declare class UpdateButtonsControl extends LitElement {
    hass: HomeAssistant;
    entity: UpdateEntity;
    fill: boolean;
    private _handleInstall;
    private _handleSkip;
    private get installDisabled();
    private get skipDisabled();
    protected render(): TemplateResult;
}
