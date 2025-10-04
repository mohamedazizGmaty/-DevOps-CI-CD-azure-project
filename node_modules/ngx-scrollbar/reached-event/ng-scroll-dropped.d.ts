import { EventEmitter, InputSignalWithTransform } from '@angular/core';
import { ReachedDroppedBase } from './reached-dropped-base';
import * as i0 from "@angular/core";
export declare class NgScrollDropped extends ReachedDroppedBase {
    /** Dropped offset value in px */
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgScrollDropped, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgScrollDropped, "ng-scrollbar[droppedTop], ng-scrollbar[droppedBottom], ng-scrollbar[droppedStart], ng-scrollbar[droppedEnd]", never, { "offsetSetter": { "alias": "droppedOffset"; "required": false; }; "offsetTopSetter": { "alias": "droppedTopOffset"; "required": false; }; "offsetBottomSetter": { "alias": "droppedBottomOffset"; "required": false; }; "offsetStartSetter": { "alias": "droppedStartOffset"; "required": false; }; "offsetEndSetter": { "alias": "droppedEndOffset"; "required": false; }; "disabled": { "alias": "disableDropped"; "required": false; "isSignal": true; }; }, { "top": "droppedTop"; "bottom": "droppedBottom"; "start": "droppedStart"; "end": "droppedEnd"; }, never, never, true, never>;
    static ngAcceptInputType_offsetSetter: unknown;
    static ngAcceptInputType_offsetTopSetter: unknown;
    static ngAcceptInputType_offsetBottomSetter: unknown;
    static ngAcceptInputType_offsetStartSetter: unknown;
    static ngAcceptInputType_offsetEndSetter: unknown;
}
