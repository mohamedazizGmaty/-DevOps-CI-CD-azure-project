import { WritableSignal } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Class representing a viewport adapter.
 * Provides methods and properties to interact with a viewport and its content.
 */
export declare class ViewportAdapter {
    /**
     * Viewport native element
     */
    nativeElement: HTMLElement;
    /**
     * The element that wraps the content inside the viewport,
     * used to measure the content size and observe its changes.
     */
    contentWrapperElement: HTMLElement;
    initialized: WritableSignal<boolean>;
    /** Viewport clientHeight */
    get offsetHeight(): number;
    /** Viewport clientWidth */
    get offsetWidth(): number;
    /** Viewport scrollTop */
    get scrollTop(): number;
    /** Viewport scrollLeft */
    get scrollLeft(): number;
    /** Content height */
    get contentHeight(): number;
    /** Content width */
    get contentWidth(): number;
    /** The remaining vertical scrollable distance. */
    get scrollMaxX(): number;
    /** The vertical remaining scrollable distance */
    get scrollMaxY(): number;
    /**
     * Initialize viewport
     */
    init(viewportElement: HTMLElement, contentElement: HTMLElement, spacerElement?: HTMLElement): void;
    reset(): void;
    /**
     * Scrolls the viewport vertically to the specified value.
     */
    scrollYTo(value: number): void;
    /**
     * Scrolls the viewport horizontally to the specified value.
     */
    scrollXTo(value: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewportAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ViewportAdapter>;
}
