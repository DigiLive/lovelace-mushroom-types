import type { AttributePart } from "lit/directive.js";
import { ActionHandlerDetail, ActionHandlerOptions } from "../../../../data/lovelace";
interface ActionHandlerType extends HTMLElement {
    holdTime: number;
    bind(element: Element, options?: ActionHandlerOptions): void;
}
interface ActionHandlerElement extends HTMLElement {
    actionHandler?: {
        options: ActionHandlerOptions;
        start?: (ev: Event) => void;
        end?: (ev: Event) => void;
        handleKeyDown?: (ev: KeyboardEvent) => void;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        "action-handler": ActionHandler;
    }
    interface HASSDomEvents {
        action: ActionHandlerDetail;
    }
}
declare class ActionHandler extends HTMLElement implements ActionHandlerType {
    holdTime: number;
    protected timer?: number;
    protected held: boolean;
    private cancelled;
    private dblClickTimeout?;
    connectedCallback(): void;
    bind(element: ActionHandlerElement, options?: ActionHandlerOptions): void;
    private _startAnimation;
    private _stopAnimation;
}
export declare const actionHandlerBind: (element: ActionHandlerElement, options?: ActionHandlerOptions) => void;
export declare const actionHandler: (_options?: ActionHandlerOptions) => import("lit-html/directive.js").DirectiveResult<{
    new (_partInfo: import("lit-html/directive.js").PartInfo): {
        update(part: AttributePart, [options]: [_options?: ActionHandlerOptions]): symbol;
        render(_options?: ActionHandlerOptions): void;
        get _$isConnected(): boolean;
    };
}>;
export {};
