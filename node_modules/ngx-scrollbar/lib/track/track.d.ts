import { Observable } from 'rxjs';
import { TrackAdapter } from './track-adapter';
import * as i0 from "@angular/core";
export declare class TrackXDirective extends TrackAdapter {
    protected get contentSize(): number;
    getCurrPosition: () => number;
    getScrollDirection: (position: number) => 'forward' | 'backward';
    constructor();
    protected scrollTo(start: number): Observable<void>;
    protected getScrollForwardStep(): number;
    protected getScrollBackwardStep(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackXDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrackXDirective, "[scrollbarTrackX]", never, {}, {}, never, never, true, never>;
}
export declare class TrackYDirective extends TrackAdapter {
    protected get contentSize(): number;
    protected getCurrPosition(): number;
    protected getScrollDirection(position: number): 'forward' | 'backward';
    protected scrollTo(top: number): Observable<void>;
    protected getScrollForwardStep(): number;
    protected getScrollBackwardStep(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackYDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrackYDirective, "[scrollbarTrackY]", never, {}, {}, never, never, true, never>;
}
