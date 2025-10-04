import { MonoTypeOperatorFunction, Observable } from 'rxjs';
export declare function preventSelection(doc: Document): MonoTypeOperatorFunction<PointerEvent>;
export declare function enableSelection(doc: Document): MonoTypeOperatorFunction<PointerEvent>;
export declare function stopPropagation(): MonoTypeOperatorFunction<PointerEvent>;
export declare function getThrottledStream<T>(stream: Observable<T>, duration: number): Observable<T>;
export interface ElementDimension {
    width?: number;
    height?: number;
}
export type ScrollbarDragging = 'x' | 'y' | 'none';
export declare enum ViewportClasses {
    Viewport = "ng-scroll-viewport",
    Content = "ng-scroll-content",
    Spacer = "ng-scroll-spacer"
}
export interface ViewportBoundaries {
    contentHeight: number;
    contentWidth: number;
    offsetHeight: number;
    offsetWidth: number;
}
export type ScrollTimelineFunc = ({ source, axis }: {
    source: HTMLElement;
    axis: 'x' | 'y';
}) => void;
