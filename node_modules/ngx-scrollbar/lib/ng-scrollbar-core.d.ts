import { Signal, InputSignal, WritableSignal, OutputEmitterRef, InputSignalWithTransform } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { SmoothScrollElement, SmoothScrollManager, SmoothScrollToElementOptions, SmoothScrollToOptions } from 'ngx-scrollbar/smooth-scroll';
import { Scrollbars } from './scrollbars/scrollbars';
import { _NgScrollbar } from './utils/scrollbar-base';
import { ViewportAdapter } from './viewport';
import { ElementDimension, ScrollbarDragging } from './utils/common';
import { ScrollbarAppearance, ScrollbarOrientation, ScrollbarPosition, ScrollbarUpdateReason, ScrollbarVisibility } from './ng-scrollbar.model';
import * as i0 from "@angular/core";
export declare abstract class NgScrollbarCore implements _NgScrollbar {
    /** Global options */
    private readonly options;
    private readonly sharedResizeObserver;
    private readonly zone;
    private readonly platform;
    /** A flag that indicates if the platform is mobile */
    readonly isMobile: boolean;
    readonly dir: Directionality;
    readonly smoothScroll: SmoothScrollManager;
    /** Viewport adapter instance */
    readonly viewport: ViewportAdapter;
    readonly nativeElement: HTMLElement;
    /**
     * Indicates if the direction is 'ltr' or 'rtl'
     */
    direction: Signal<Direction>;
    /**
     * Indicates when scrollbar thumb is being dragged
     */
    dragging: WritableSignal<ScrollbarDragging>;
    /**
     * Sets the supported scroll track of the viewport, there are 3 options:
     *
     * - `vertical` Use both vertical and horizontal scrollbar
     * - `horizontal` Use both vertical and horizontal scrollbar
     * - `auto` Use both vertical and horizontal scrollbar
     */
    orientation: InputSignal<ScrollbarOrientation>;
    /**
     * When to show the scrollbar, and there are 3 options:
     *
     * - `native` (default) Scrollbar will be visible when viewport is scrollable like with native scrollbar
     * - `hover` Scrollbars are hidden by default, only visible on scrolling or hovering
     * - `always` Scrollbars are always shown even if the viewport is not scrollable
     */
    visibility: InputSignal<ScrollbarVisibility>;
    /** Show scrollbar buttons */
    buttons: InputSignalWithTransform<boolean, string | boolean>;
    /** Disables scrollbar interaction like dragging thumb and jumping by track click */
    disableInteraction: InputSignalWithTransform<boolean, string | boolean>;
    /** Whether ResizeObserver is disabled */
    disableSensor: InputSignalWithTransform<boolean, string | boolean>;
    /** Throttle interval for detecting changes via ResizeObserver */
    sensorThrottleTime: InputSignalWithTransform<number, string | number>;
    /** A flag used to activate hover effect on the offset area around the scrollbar */
    hoverOffset: InputSignalWithTransform<boolean, string | boolean>;
    /** Viewport dimension */
    viewportDimension: WritableSignal<ElementDimension>;
    /** Content dimension */
    contentDimension: WritableSignal<ElementDimension>;
    private state;
    isVerticallyScrollable: Signal<boolean>;
    isHorizontallyScrollable: Signal<boolean>;
    verticalUsed: Signal<boolean>;
    horizontalUsed: Signal<boolean>;
    /** Scroll duration when the scroll track is clicked */
    trackScrollDuration: InputSignalWithTransform<number, string | number>;
    /**
     *  Sets the appearance of the scrollbar, there are 2 options:
     *
     * - `native` (default) scrollbar space will be reserved just like with native scrollbar.
     * - `compact` scrollbar doesn't reserve any space, they are placed over the viewport.
     */
    appearance: InputSignal<ScrollbarAppearance>;
    /**
     * Sets the position of each scrollbar, there are 4 options:
     *
     * - `native` (Default) Use the default position like in native scrollbar.
     * - `invertY` Inverts vertical scrollbar position
     * - `invertX` Inverts Horizontal scrollbar position
     * - `invertAll` Inverts both scrollbar positions
     */
    position: InputSignal<ScrollbarPosition>;
    /** A class forwarded to the scrollbar track element */
    trackClass: InputSignal<string>;
    /** A class forwarded to the scrollbar thumb element */
    thumbClass: InputSignal<string>;
    /** A class forwarded to the scrollbar button element */
    buttonClass: InputSignal<string>;
    /** Steam that emits when scrollbar is initialized */
    afterInit: OutputEmitterRef<void>;
    /** Steam that emits when scrollbar is updated */
    afterUpdate: OutputEmitterRef<void>;
    /** The scrollbars component instance used for testing purpose */
    abstract _scrollbars: Signal<Scrollbars>;
    protected constructor();
    /**
     * Manual update
     */
    update(reason?: ScrollbarUpdateReason): void;
    /**
     * Smooth scroll functions
     */
    scrollTo(options: SmoothScrollToOptions): Promise<void>;
    /**
     * Scroll to element by reference or selector
     */
    scrollToElement(target: SmoothScrollElement, options?: SmoothScrollToElementOptions): Promise<void>;
    private updateDimensions;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgScrollbarCore, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgScrollbarCore, never, never, { "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; "visibility": { "alias": "visibility"; "required": false; "isSignal": true; }; "buttons": { "alias": "buttons"; "required": false; "isSignal": true; }; "disableInteraction": { "alias": "disableInteraction"; "required": false; "isSignal": true; }; "disableSensor": { "alias": "disableSensor"; "required": false; "isSignal": true; }; "sensorThrottleTime": { "alias": "sensorThrottleTime"; "required": false; "isSignal": true; }; "hoverOffset": { "alias": "hoverOffset"; "required": false; "isSignal": true; }; "trackScrollDuration": { "alias": "trackScrollDuration"; "required": false; "isSignal": true; }; "appearance": { "alias": "appearance"; "required": false; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; "trackClass": { "alias": "trackClass"; "required": false; "isSignal": true; }; "thumbClass": { "alias": "thumbClass"; "required": false; "isSignal": true; }; "buttonClass": { "alias": "buttonClass"; "required": false; "isSignal": true; }; }, { "afterInit": "afterInit"; "afterUpdate": "afterUpdate"; }, never, never, true, never>;
}
