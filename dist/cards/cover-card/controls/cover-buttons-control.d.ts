import { LitElement, TemplateResult } from "lit";
import { CoverEntity, HomeAssistant } from "../../../ha";
import "../../../shared/button";
import "../../../shared/button-group";
export declare class CoverButtonsControl extends LitElement {
    hass: HomeAssistant;
    entity: CoverEntity;
    fill: boolean;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    private get openDisabled();
    private get closedDisabled();
    protected render(): TemplateResult;
}
