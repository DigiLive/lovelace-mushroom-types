import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class Chip extends LitElement {
    icon: string;
    label: string;
    avatar: string;
    avatarOnly: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
