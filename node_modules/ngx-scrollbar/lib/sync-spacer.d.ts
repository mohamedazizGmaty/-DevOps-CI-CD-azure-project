import { WritableSignal } from '@angular/core';
import { ElementDimension } from './utils/common';
import * as i0 from "@angular/core";
export declare class SyncSpacer {
    private readonly sharedResizeObserver;
    private readonly scrollbar;
    private readonly zone;
    /**
     * A signal used to sync spacer dimension when content dimension changes
     */
    spacerDimension: WritableSignal<ElementDimension>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SyncSpacer, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SyncSpacer, "ng-scrollbar[externalViewport][syncSpacer]", never, {}, {}, never, never, true, never>;
}
