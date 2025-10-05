import { WritableSignal, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { _NgScrollbar } from '../utils/scrollbar-base';
import * as i0 from "@angular/core";
export declare const SCROLLBAR_CONTROL: InjectionToken<ScrollbarAdapter>;
export declare abstract class ScrollbarAdapter {
    trackSize: WritableSignal<number>;
    abstract readonly rectOffsetProperty: 'left' | 'top';
    abstract readonly rectSizeProperty: 'width' | 'height';
    abstract readonly sizeProperty: 'offsetWidth' | 'offsetHeight';
    abstract readonly clientProperty: 'clientX' | 'clientY';
    abstract readonly offsetProperty: 'offsetX' | 'offsetY';
    abstract readonly axis: 'x' | 'y';
    abstract get viewportScrollMax(): number;
    abstract get viewportScrollOffset(): number;
    readonly cmp: _NgScrollbar;
    abstract scrollTo(value: number, duration: number): Observable<void>;
    abstract instantScrollTo(value: number, scrollMax?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollbarAdapter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScrollbarAdapter, never, never, {}, {}, never, never, true, never>;
}
