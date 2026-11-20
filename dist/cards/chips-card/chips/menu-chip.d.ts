import { CSSResultGroup, LitElement, nothing, TemplateResult } from "lit";
import { HomeAssistant } from "../../../ha";
import { LovelaceChip, MenuChipConfig } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";
export declare const DEFAULT_MENU_ICON = "mdi:menu";
export declare class MenuChip extends LitElement implements LovelaceChip {
    static getConfigElement(): Promise<LovelaceChipEditor>;
    static getStubConfig(_hass: HomeAssistant): Promise<MenuChipConfig>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: MenuChipConfig): void;
    private _handleAction;
    protected render(): TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
