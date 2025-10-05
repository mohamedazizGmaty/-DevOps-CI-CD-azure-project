import { NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { _NgScrollbar } from '../utils/scrollbar-base';
import { ScrollbarAdapter } from '../scrollbar/scrollbar-adapter';
import * as i0 from "@angular/core";
export declare abstract class PointerEventsAdapter {
    protected readonly cmp: _NgScrollbar;
    protected readonly control: ScrollbarAdapter;
    protected readonly document: Document;
    protected readonly zone: NgZone;
    readonly nativeElement: HTMLElement;
    _pointerEventsSub: Subscription;
    abstract get pointerEvents(): Observable<PointerEvent>;
    protected constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PointerEventsAdapter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PointerEventsAdapter, never, never, {}, {}, never, never, true, never>;
}
