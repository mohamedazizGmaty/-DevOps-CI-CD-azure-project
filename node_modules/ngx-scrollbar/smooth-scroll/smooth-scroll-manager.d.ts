import { Observable, Subject } from 'rxjs';
import { SmoothScrollElement, SmoothScrollStep, SmoothScrollToElementOptions, SmoothScrollToOptions } from './smooth-scroll.model';
import * as i0 from "@angular/core";
export declare class SmoothScrollManager {
    private document;
    private zone;
    private readonly _defaultOptions;
    private onGoingScrolls;
    /**
     * Timing method
     */
    private get now();
    /**
     * changes scroll position inside an element
     */
    private scrollElement;
    /**
     * Handles a given parameter of type HTMLElement, ElementRef or selector
     */
    private getElement;
    /**
     * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
     */
    private getScrollDestroyerRef;
    /**
     * A function called recursively that, given a context, steps through scrolling
     */
    private step;
    /**
     * Checks if smooth scroll has reached, cleans up the smooth scroll stream
     */
    private isReached;
    /**
     * Scroll recursively until coordinates are reached
     * @param context
     * @param destroyed
     */
    scrolling(context: SmoothScrollStep, destroyed: Subject<void>): Observable<void>;
    /**
     * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
     */
    private onScrollReached;
    /**
     * Terminates an ongoing smooth scroll
     */
    private interrupted;
    private applyScrollToOptions;
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param scrollable element
     * @param customOptions specified the offsets to scroll to.
     */
    scrollTo(scrollable: SmoothScrollElement, customOptions: SmoothScrollToOptions): Promise<void>;
    /**
     * Scroll to element by reference or selector
     */
    scrollToElement(scrollable: SmoothScrollElement, target: SmoothScrollElement, customOptions?: SmoothScrollToElementOptions): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmoothScrollManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SmoothScrollManager>;
}
