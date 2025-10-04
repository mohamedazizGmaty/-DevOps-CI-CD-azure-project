import { Signal, ElementRef } from '@angular/core';
import { NgScrollbarCore } from './ng-scrollbar-core';
import { Scrollbars } from './scrollbars/scrollbars';
import * as i0 from "@angular/core";
export declare class NgScrollbar extends NgScrollbarCore {
    contentWrapper: Signal<ElementRef<HTMLElement>>;
    _scrollbars: Signal<Scrollbars>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NgScrollbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgScrollbar, "ng-scrollbar:not([externalViewport])", ["ngScrollbar"], {}, {}, never, ["*"], true, never>;
}
