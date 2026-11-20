import { LitElement, TemplateResult } from "lit";
import { HomeAssistant, VacuumEntity } from "../../../ha";
import { VacuumCommand } from "../vacuum-card-config";
interface VacuumButton {
    icon: string;
    serviceName: string;
    command: VacuumCommand;
    isSupported: (entity: VacuumEntity) => boolean;
    isVisible?: (entity: VacuumEntity) => boolean;
    isDisabled: (entity: VacuumEntity) => boolean;
}
export declare const isButtonVisible: (entity: VacuumEntity, button: VacuumButton, commands: VacuumCommand[]) => boolean;
export declare const isButtonSupported: (entity: VacuumEntity, button: VacuumButton, commands: VacuumCommand[]) => boolean;
export declare const isCommandsControlVisible: (entity: VacuumEntity, commands: VacuumCommand[]) => boolean;
export declare const isCommandsControlSupported: (entity: VacuumEntity, commands: VacuumCommand[]) => boolean;
export declare const VACUUM_BUTTONS: VacuumButton[];
export declare class CoverButtonsControl extends LitElement {
    hass: HomeAssistant;
    entity: VacuumEntity;
    commands: VacuumCommand[];
    fill: boolean;
    private callService;
    protected render(): TemplateResult;
}
export {};
