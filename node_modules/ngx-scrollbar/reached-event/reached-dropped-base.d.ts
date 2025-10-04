import { OnInit, NgZone, Renderer2, EventEmitter, InputSignalWithTransform } from '@angular/core';
import { _NgScrollbar } from 'ngx-scrollbar';
import * as i0 from "@angular/core";
type EventAction = {
    emit: () => void;
};
export declare abstract class ReachedDroppedBase implements OnInit {
    protected readonly zone: NgZone;
    protected readonly renderer: Renderer2;
    protected readonly scrollbar: _NgScrollbar;
    /** An array that contains all trigger elements  **/
    protected triggerElements: HTMLElement[];
    /** The intersection observer reference */
    protected intersectionObserver: IntersectionObserver;
    /** An array that contains the chosen outputs */
    protected subscribedEvents: string[];
    /** The wrapper element that contains the trigger elements */
    protected triggerElementsWrapper: HTMLElement;
    /** The wrapper element class name */
    protected abstract triggerElementsWrapperClass: string;
    /** The trigger element class name */
    protected abstract triggerElementClass: string;
    abstract disabled: InputSignalWithTransform<boolean, string | boolean>;
    abstract top: EventEmitter<void>;
    abstract bottom: EventEmitter<void>;
    abstract start: EventEmitter<void>;
    abstract end: EventEmitter<void>;
    protected abstract isTriggered(entry: IntersectionObserverEntry): boolean;
    /** A mapper function to ease forwarding the intersected element to its proper output */
    readonly eventActions: Record<string, EventAction>;
    constructor();
    private onAction;
    protected setCssVariable(property: string, value: number): void;
    private activate;
    private deactivate;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReachedDroppedBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReachedDroppedBase, never, never, {}, {}, never, never, true, never>;
}
export {};
