import * as i0 from '@angular/core';
import { inject, effect, untracked, Directive } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { NG_SCROLLBAR } from 'ngx-scrollbar';

class NgScrollbarMatSelectViewport {
    constructor() {
        this.scrollbar = inject(NG_SCROLLBAR, { self: true });
        this.matSelect = inject(MatSelect);
        // The scroll position be set before the panel is rendered, that's why we use effect over afterRenderEffect.
        effect(() => {
            const isVerticallyScrollable = this.scrollbar.isVerticallyScrollable();
            untracked(() => {
                if (isVerticallyScrollable && this.matSelect.panelOpen) {
                    const selected = this.matSelect.selected;
                    if (selected) {
                        const element = Array.isArray(selected) ? selected[0]._getHostElement() : selected._getHostElement();
                        const height = this.scrollbar.nativeElement.clientHeight;
                        this.scrollbar.viewport.scrollYTo(element.offsetTop + element.offsetHeight - height);
                    }
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollbarMatSelectViewport, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: NgScrollbarMatSelectViewport, isStandalone: true, selector: "ng-scrollbar[matSelectViewport]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollbarMatSelectViewport, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-scrollbar[matSelectViewport]'
                }]
        }], ctorParameters: () => [] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgScrollbarMatSelectViewport };
//# sourceMappingURL=ngx-scrollbar-mat.mjs.map
