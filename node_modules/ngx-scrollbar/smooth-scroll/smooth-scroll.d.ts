import { SmoothScrollElement, SmoothScrollToElementOptions, SmoothScrollToOptions } from './smooth-scroll.model';
import * as i0 from "@angular/core";
export declare class SmoothScroll {
    private readonly smoothScroll;
    private readonly element;
    scrollTo(options: SmoothScrollToOptions): Promise<void>;
    scrollToElement(target: SmoothScrollElement, options: SmoothScrollToElementOptions): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmoothScroll, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SmoothScroll, "[smoothScroll]", ["smoothScroll"], {}, {}, never, never, true, never>;
}
