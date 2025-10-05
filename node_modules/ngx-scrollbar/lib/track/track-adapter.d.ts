import { Observable } from 'rxjs';
import { PointerEventsAdapter } from '../utils/pointer-events-adapter';
import * as i0 from "@angular/core";
export declare abstract class TrackAdapter extends PointerEventsAdapter {
    private currMousePosition;
    protected scrollDirection: 'forward' | 'backward';
    protected scrollMax: number;
    protected abstract get contentSize(): number;
    protected get viewportSize(): number;
    protected get clientRect(): DOMRect;
    protected abstract getCurrPosition(): number;
    protected abstract getScrollDirection(position: number): 'forward' | 'backward';
    protected abstract scrollTo(position: number): Observable<void>;
    get offset(): number;
    get size(): number;
    get pointerEvents(): Observable<PointerEvent>;
    constructor();
    protected abstract getScrollForwardStep(): number;
    protected abstract getScrollBackwardStep(): number;
    /**
     *  Callback when mouse is first clicked on the track
     */
    onTrackFirstClick(e: PointerEvent): Observable<void>;
    private nextStep;
    /**
     * Callback when mouse is still down on the track
     * Incrementally scrolls towards target position until reached
     */
    onTrackOngoingMousedown(): Observable<unknown>;
    /**
     * Returns a flag that determines whether the scroll from the given position is the final step or not
     */
    private isReached;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackAdapter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrackAdapter, never, never, {}, {}, never, never, true, never>;
}
