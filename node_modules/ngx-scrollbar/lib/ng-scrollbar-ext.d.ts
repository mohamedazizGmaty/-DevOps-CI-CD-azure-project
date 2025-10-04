import { Signal, InputSignal, WritableSignal, OnDestroy, ComponentRef } from '@angular/core';
import { ScrollViewport } from './viewport';
import { NgScrollbarCore } from './ng-scrollbar-core';
import { Scrollbars } from './scrollbars/scrollbars';
import * as i0 from "@angular/core";
export declare class NgScrollbarExt extends NgScrollbarCore implements OnDestroy {
    private readonly renderer;
    private readonly appRef;
    _scrollbarsRef: ComponentRef<Scrollbars>;
    _scrollbars: WritableSignal<Scrollbars>;
    /**
     * Selector used to query the viewport element.
     */
    externalViewport: InputSignal<string>;
    /**
     * Selector used to query the content wrapper element.
     */
    externalContentWrapper: InputSignal<string>;
    /**
     * Selector used to query the spacer element (virtual scroll integration).
     * In the case of integrating the scrollbar with a virtual scroll component,
     * a spacer element is typically created to match the real size of the content.
     * The scrollbar will use the size of this spacer element for calculations instead of the content wrapper size.
     */
    externalSpacer: InputSignal<string>;
    viewportElement: WritableSignal<HTMLElement>;
    viewportError: Signal<string>;
    contentWrapperElement: WritableSignal<HTMLElement>;
    contentWrapperError: Signal<string>;
    spacerElement: WritableSignal<HTMLElement>;
    spacerError: Signal<string>;
    /**
     * Skip initializing the viewport and the scrollbar
     * this is used when the component needs to wait for 3rd party library to render
     */
    skipInit: boolean;
    /**
     * Reference to the external viewport directive if used
     */
    customViewport: Signal<ScrollViewport>;
    constructor();
    ngOnDestroy(): void;
    initialize(viewportElement: HTMLElement, contentWrapperElement: HTMLElement, spacerElement: HTMLElement): void;
    _attachScrollbars(): void;
    private getElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgScrollbarExt, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgScrollbarExt, "ng-scrollbar[externalViewport]", ["ngScrollbar"], { "externalViewport": { "alias": "externalViewport"; "required": false; "isSignal": true; }; "externalContentWrapper": { "alias": "externalContentWrapper"; "required": false; "isSignal": true; }; "externalSpacer": { "alias": "externalSpacer"; "required": false; "isSignal": true; }; }, {}, ["customViewport"], ["*"], true, never>;
}
