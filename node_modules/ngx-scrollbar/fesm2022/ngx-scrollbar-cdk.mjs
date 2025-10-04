import * as i0 from '@angular/core';
import { inject, contentChild, effect, untracked, Directive } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { NgScrollbarExt } from 'ngx-scrollbar';

class NgScrollbarCdkVirtualScroll {
    constructor() {
        this.scrollbar = inject(NgScrollbarExt, { self: true });
        this.virtualScrollViewportRef = contentChild(CdkVirtualScrollViewport);
        this.scrollbar.skipInit = true;
        // Since 'effects' runs before 'afterNextRender' and our elements are defined, will use 'effects'.
        effect(() => {
            const virtualScrollViewport = this.virtualScrollViewportRef();
            untracked(() => {
                if (virtualScrollViewport) {
                    const viewport = virtualScrollViewport.elementRef.nativeElement;
                    const contentWrapper = virtualScrollViewport._contentWrapper.nativeElement;
                    const spacer = virtualScrollViewport.elementRef.nativeElement.querySelector('.cdk-virtual-scroll-spacer');
                    this.scrollbar.initialize(viewport, contentWrapper, spacer);
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollbarCdkVirtualScroll, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.2.0", version: "19.1.1", type: NgScrollbarCdkVirtualScroll, isStandalone: true, selector: "ng-scrollbar[cdkVirtualScrollViewport]", queries: [{ propertyName: "virtualScrollViewportRef", first: true, predicate: CdkVirtualScrollViewport, descendants: true, isSignal: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollbarCdkVirtualScroll, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-scrollbar[cdkVirtualScrollViewport]'
                }]
        }], ctorParameters: () => [] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgScrollbarCdkVirtualScroll };
//# sourceMappingURL=ngx-scrollbar-cdk.mjs.map
