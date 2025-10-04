import { InputSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { PointerEventsAdapter } from '../utils/pointer-events-adapter';
import * as i0 from "@angular/core";
export declare class ScrollbarButton extends PointerEventsAdapter {
    scrollbarButton: InputSignal<'top' | 'bottom' | 'start' | 'end'>;
    scrollDirection: InputSignal<'forward' | 'backward'>;
    private afterFirstClickDelay;
    private firstClickDuration;
    private scrollBy;
    private onGoingScrollBy;
    private nextStep;
    private canScroll;
    get pointerEvents(): Observable<PointerEvent>;
    constructor();
    private firstScrollStep;
    private onGoingScrollStep;
    private onOngoingPointerdown;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollbarButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollbarButton, "button[scrollbarButton]", never, { "scrollbarButton": { "alias": "scrollbarButton"; "required": true; "isSignal": true; }; "scrollDirection": { "alias": "scrollDirection"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
