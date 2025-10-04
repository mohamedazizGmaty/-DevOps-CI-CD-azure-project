import { Observable } from 'rxjs';
import { ScrollbarAdapter } from './scrollbar-adapter';
import { ScrollbarManager } from '../utils/scrollbar-manager';
import * as i0 from "@angular/core";
export declare class ScrollbarY extends ScrollbarAdapter {
    readonly rectOffsetProperty: 'left' | 'top';
    readonly rectSizeProperty: 'width' | 'height';
    readonly sizeProperty: 'offsetWidth' | 'offsetHeight';
    readonly clientProperty: 'clientX' | 'clientY';
    readonly offsetProperty: 'offsetX' | 'offsetY';
    readonly axis: 'x' | 'y';
    get viewportScrollMax(): number;
    get viewportScrollOffset(): number;
    scrollTo(top: number, duration: number): Observable<void>;
    instantScrollTo(value: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollbarY, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollbarY, "scrollbar-y", never, {}, {}, never, never, true, never>;
}
export declare class ScrollbarX extends ScrollbarAdapter {
    readonly manager: ScrollbarManager;
    readonly rectOffsetProperty: 'left' | 'top';
    readonly rectSizeProperty: 'width' | 'height';
    readonly sizeProperty: 'offsetWidth' | 'offsetHeight';
    readonly clientProperty: 'clientX' | 'clientY';
    readonly offsetProperty: 'offsetX' | 'offsetY';
    readonly axis: 'x' | 'y';
    private handlePosition;
    get viewportScrollMax(): number;
    get viewportScrollOffset(): number;
    constructor();
    scrollTo(left: number, duration: number): Observable<void>;
    instantScrollTo(value: number, scrollMax?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollbarX, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollbarX, "scrollbar-x", never, {}, {}, never, never, true, never>;
}
