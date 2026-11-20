import { LitElement, TemplateResult } from "lit";
import { HomeAssistant, LockEntity } from "../../../ha";
interface LockButton {
    icon: string;
    title?: string;
    serviceName?: string;
    isVisible: (entity: LockEntity) => boolean;
    isDisabled: (entity: LockEntity) => boolean;
}
export declare const LOCK_BUTTONS: LockButton[];
export declare class LockButtonsControl extends LitElement {
    hass: HomeAssistant;
    entity: LockEntity;
    fill: boolean;
    private callService;
    protected render(): TemplateResult;
}
export {};
