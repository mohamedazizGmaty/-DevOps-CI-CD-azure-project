import { InputSignal } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AsyncDetection {
    private readonly scrollbar;
    private readonly zone;
    private readonly contentObserver;
    asyncDetection: InputSignal<'auto' | ''>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncDetection, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AsyncDetection, "ng-scrollbar[externalViewport][asyncDetection]", never, { "asyncDetection": { "alias": "asyncDetection"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
