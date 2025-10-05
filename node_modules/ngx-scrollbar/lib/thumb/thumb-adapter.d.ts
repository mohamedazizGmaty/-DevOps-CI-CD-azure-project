import { Observable } from 'rxjs';
import { ScrollbarManager } from '../utils/scrollbar-manager';
import { PointerEventsAdapter } from '../utils/pointer-events-adapter';
import * as i0 from "@angular/core";
export declare abstract class ThumbAdapter extends PointerEventsAdapter {
    protected readonly manager: ScrollbarManager;
    private readonly track;
    _animation: Animation;
    get size(): number;
    get trackMax(): number;
    /**
     * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
     * This function is called by thumb drag event using viewport or scrollbar pointer events
     */
    get pointerEvents(): Observable<PointerEvent>;
    constructor();
    private setDragging;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThumbAdapter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThumbAdapter, never, never, {}, {}, never, never, true, never>;
}
