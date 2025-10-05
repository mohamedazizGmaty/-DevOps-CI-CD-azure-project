import { EventEmitter, InputSignalWithTransform } from '@angular/core';
import { ReachedDroppedBase } from './reached-dropped-base';
import * as i0 from "@angular/core";
export declare class NgScrollReached extends ReachedDroppedBase {
    /** Reached offset value in px */
    set offsetSetter(value: number);
    set offsetTopSetter(value: number);
    set offsetBottomSetter(value: number);
    set offsetStartSetter(value: number);
    set offsetEndSetter(value: number);
    disabled: InputSignalWithTransform<boolean, string | boolean>;
    top: EventEmitter<void>;
    bottom: EventEmitter<void>;
    start: EventEmitter<void>;
    end: EventEmitter<void>;
    protected triggerElementsWrapperClass: string;
    protected triggerElementClass: string;
    protected isTriggered(entry: IntersectionObserverEntry): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgScrollReached, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgScrollReached, "ng-scrollbar[reachedTop], ng-scrollbar[reachedBottom], ng-scrollbar[reachedStart], ng-scrollbar[reachedEnd]", never, { "offsetSetter": { "alias": "reachedOffset"; "required": false; }; "offsetTopSetter": { "alias": "reachedTopOffset"; "required": false; }; "offsetBottomSetter": { "alias": "reachedBottomOffset"; "required": false; }; "offsetStartSetter": { "alias": "reachedStartOffset"; "required": false; }; "offsetEndSetter": { "alias": "reachedEndOffset"; "required": false; }; "disabled": { "alias": "disableReached"; "required": false; "isSignal": true; }; }, { "top": "reachedTop"; "bottom": "reachedBottom"; "start": "reachedStart"; "end": "reachedEnd"; }, never, never, true, never>;
    static ngAcceptInputType_offsetSetter: unknown;
    static ngAcceptInputType_offsetTopSetter: unknown;
    static ngAcceptInputType_offsetBottomSetter: unknown;
    static ngAcceptInputType_offsetStartSetter: unknown;
    static ngAcceptInputType_offsetEndSetter: unknown;
}
