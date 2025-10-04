import { WritableSignal } from '@angular/core';
import { ScrollTimelineFunc } from './common';
import * as i0 from "@angular/core";
export declare class ScrollbarManager {
    private readonly isBrowser;
    readonly _polyfillUrl: string;
    readonly document: Document;
    readonly window: Window;
    readonly scrollTimelinePolyfill: WritableSignal<ScrollTimelineFunc>;
    constructor();
    initPolyfill(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollbarManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScrollbarManager>;
}
