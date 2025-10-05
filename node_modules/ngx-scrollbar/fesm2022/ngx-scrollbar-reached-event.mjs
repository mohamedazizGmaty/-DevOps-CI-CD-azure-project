import * as i0 from '@angular/core';
import { inject, NgZone, Renderer2, afterRenderEffect, Directive, input, booleanAttribute, EventEmitter, numberAttribute, Input, Output } from '@angular/core';
import { NG_SCROLLBAR } from 'ngx-scrollbar';

class ReachedDroppedBase {
    constructor() {
        this.zone = inject(NgZone);
        this.renderer = inject(Renderer2);
        this.scrollbar = inject(NG_SCROLLBAR, { self: true });
        /** An array that contains all trigger elements  **/
        this.triggerElements = [];
        /** An array that contains the chosen outputs */
        this.subscribedEvents = [];
        /** A mapper function to ease forwarding the intersected element to its proper output */
        this.eventActions = {
            top: { emit: () => this.scrollbar.isVerticallyScrollable() ? this.top.emit() : null },
            bottom: { emit: () => this.scrollbar.isVerticallyScrollable() ? this.bottom.emit() : null },
            start: { emit: () => this.scrollbar.isHorizontallyScrollable() ? this.start.emit() : null },
            end: { emit: () => this.scrollbar.isHorizontallyScrollable() ? this.end.emit() : null }
        };
        afterRenderEffect({
            earlyRead: (onCleanUp) => {
                if (!this.disabled() && this.scrollbar.viewport.initialized()) {
                    this.activate();
                }
                onCleanUp(() => this.deactivate());
            }
        });
    }
    onAction(trigger) {
        if (trigger) {
            this.eventActions[trigger]?.emit();
        }
    }
    setCssVariable(property, value) {
        if (value) {
            this.scrollbar.nativeElement.style.setProperty(property, `${value}px`);
        }
    }
    activate() {
        this.zone.runOutsideAngular(() => {
            // Create the scrollbars element inside the viewport
            this.triggerElementsWrapper = this.renderer.createElement('div');
            this.renderer.addClass(this.triggerElementsWrapper, this.triggerElementsWrapperClass);
            this.renderer.appendChild(this.scrollbar.viewport.contentWrapperElement, this.triggerElementsWrapper);
            // Create a trigger element for each subscribed event
            this.subscribedEvents.forEach((event) => {
                const triggerElement = this.renderer.createElement('div');
                this.renderer.addClass(triggerElement, this.triggerElementClass);
                this.renderer.setAttribute(triggerElement, 'trigger', event);
                this.renderer.appendChild(this.triggerElementsWrapper, triggerElement);
                this.triggerElements.push(triggerElement);
            });
            // The first time the observer is triggered as soon as the element is observed,
            // This flag is used to ignore this first trigger
            let intersectionObserverInit = false;
            this.intersectionObserver = new IntersectionObserver((entries) => {
                if (intersectionObserverInit) {
                    entries.forEach((entry) => {
                        if (this.isTriggered(entry)) {
                            // Forward the detected trigger element only after the observer is initialized
                            // Only observe the trigger elements when scrollable
                            this.zone.run(() => this.onAction(entry.target.getAttribute('trigger')));
                        }
                    });
                }
                else {
                    // Once the initial element is detected set a flag to true
                    intersectionObserverInit = true;
                }
            }, {
                root: this.scrollbar.viewport.nativeElement
            });
            this.triggerElements.forEach((el) => this.intersectionObserver.observe(el));
        });
    }
    deactivate() {
        this.intersectionObserver?.disconnect();
        this.triggerElementsWrapper?.remove();
        this.triggerElements = [];
    }
    ngOnInit() {
        if (this.top.observed) {
            this.subscribedEvents.push('top');
        }
        if (this.bottom.observed) {
            this.subscribedEvents.push('bottom');
        }
        if (this.start.observed) {
            this.subscribedEvents.push('start');
        }
        if (this.end.observed) {
            this.subscribedEvents.push('end');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: ReachedDroppedBase, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.1.1", type: ReachedDroppedBase, isStandalone: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: ReachedDroppedBase, decorators: [{
            type: Directive
        }], ctorParameters: () => [] });

class NgScrollReached extends ReachedDroppedBase {
    constructor() {
        super(...arguments);
        this.disabled = input(false, {
            alias: 'disableReached',
            transform: booleanAttribute
        });
        this.top = new EventEmitter();
        this.bottom = new EventEmitter();
        this.start = new EventEmitter();
        this.end = new EventEmitter();
        this.triggerElementsWrapperClass = 'ng-scroll-reached-wrapper';
        this.triggerElementClass = 'scroll-reached-trigger-element';
    }
    /** Reached offset value in px */
    set offsetSetter(value) {
        this.setCssVariable('--reached-offset', value);
    }
    set offsetTopSetter(value) {
        this.setCssVariable('--reached-offset-top', value);
    }
    set offsetBottomSetter(value) {
        this.setCssVariable('--reached-offset-bottom', value);
    }
    set offsetStartSetter(value) {
        this.setCssVariable('--reached-offset-start', value);
    }
    set offsetEndSetter(value) {
        this.setCssVariable('--reached-offset-end', value);
    }
    isTriggered(entry) {
        return entry.isIntersecting;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollReached, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.1.1", type: NgScrollReached, isStandalone: true, selector: "ng-scrollbar[reachedTop], ng-scrollbar[reachedBottom], ng-scrollbar[reachedStart], ng-scrollbar[reachedEnd]", inputs: { offsetSetter: { classPropertyName: "offsetSetter", publicName: "reachedOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetTopSetter: { classPropertyName: "offsetTopSetter", publicName: "reachedTopOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetBottomSetter: { classPropertyName: "offsetBottomSetter", publicName: "reachedBottomOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetStartSetter: { classPropertyName: "offsetStartSetter", publicName: "reachedStartOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetEndSetter: { classPropertyName: "offsetEndSetter", publicName: "reachedEndOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, disabled: { classPropertyName: "disabled", publicName: "disableReached", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { top: "reachedTop", bottom: "reachedBottom", start: "reachedStart", end: "reachedEnd" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollReached, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-scrollbar[reachedTop], ng-scrollbar[reachedBottom], ng-scrollbar[reachedStart], ng-scrollbar[reachedEnd]',
                    standalone: true,
                }]
        }], propDecorators: { offsetSetter: [{
                type: Input,
                args: [{ alias: 'reachedOffset', transform: numberAttribute }]
            }], offsetTopSetter: [{
                type: Input,
                args: [{ alias: 'reachedTopOffset', transform: numberAttribute }]
            }], offsetBottomSetter: [{
                type: Input,
                args: [{ alias: 'reachedBottomOffset', transform: numberAttribute }]
            }], offsetStartSetter: [{
                type: Input,
                args: [{ alias: 'reachedStartOffset', transform: numberAttribute }]
            }], offsetEndSetter: [{
                type: Input,
                args: [{ alias: 'reachedEndOffset', transform: numberAttribute }]
            }], top: [{
                type: Output,
                args: ['reachedTop']
            }], bottom: [{
                type: Output,
                args: ['reachedBottom']
            }], start: [{
                type: Output,
                args: ['reachedStart']
            }], end: [{
                type: Output,
                args: ['reachedEnd']
            }] } });

class NgScrollDropped extends ReachedDroppedBase {
    constructor() {
        super(...arguments);
        this.disabled = input(false, {
            alias: 'disableDropped',
            transform: booleanAttribute
        });
        this.top = new EventEmitter();
        this.bottom = new EventEmitter();
        this.start = new EventEmitter();
        this.end = new EventEmitter();
        this.triggerElementsWrapperClass = 'ng-scroll-dropped-wrapper';
        this.triggerElementClass = 'scroll-dropped-trigger-element';
    }
    /** Dropped offset value in px */
    set offsetSetter(value) {
        this.setCssVariable('--dropped-offset', value);
    }
    set offsetTopSetter(value) {
        this.setCssVariable('--dropped-offset-top', value);
    }
    set offsetBottomSetter(value) {
        this.setCssVariable('--dropped-offset-bottom', value);
    }
    set offsetStartSetter(value) {
        this.setCssVariable('--dropped-offset-start', value);
    }
    set offsetEndSetter(value) {
        this.setCssVariable('--dropped-offset-end', value);
    }
    isTriggered(entry) {
        return !entry.isIntersecting;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollDropped, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.1.1", type: NgScrollDropped, isStandalone: true, selector: "ng-scrollbar[droppedTop], ng-scrollbar[droppedBottom], ng-scrollbar[droppedStart], ng-scrollbar[droppedEnd]", inputs: { offsetSetter: { classPropertyName: "offsetSetter", publicName: "droppedOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetTopSetter: { classPropertyName: "offsetTopSetter", publicName: "droppedTopOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetBottomSetter: { classPropertyName: "offsetBottomSetter", publicName: "droppedBottomOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetStartSetter: { classPropertyName: "offsetStartSetter", publicName: "droppedStartOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, offsetEndSetter: { classPropertyName: "offsetEndSetter", publicName: "droppedEndOffset", isSignal: false, isRequired: false, transformFunction: numberAttribute }, disabled: { classPropertyName: "disabled", publicName: "disableDropped", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { top: "droppedTop", bottom: "droppedBottom", start: "droppedStart", end: "droppedEnd" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: NgScrollDropped, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-scrollbar[droppedTop], ng-scrollbar[droppedBottom], ng-scrollbar[droppedStart], ng-scrollbar[droppedEnd]',
                    standalone: true,
                }]
        }], propDecorators: { offsetSetter: [{
                type: Input,
                args: [{ alias: 'droppedOffset', transform: numberAttribute }]
            }], offsetTopSetter: [{
                type: Input,
                args: [{ alias: 'droppedTopOffset', transform: numberAttribute }]
            }], offsetBottomSetter: [{
                type: Input,
                args: [{ alias: 'droppedBottomOffset', transform: numberAttribute }]
            }], offsetStartSetter: [{
                type: Input,
                args: [{ alias: 'droppedStartOffset', transform: numberAttribute }]
            }], offsetEndSetter: [{
                type: Input,
                args: [{ alias: 'droppedEndOffset', transform: numberAttribute }]
            }], top: [{
                type: Output,
                args: ['droppedTop']
            }], bottom: [{
                type: Output,
                args: ['droppedBottom']
            }], start: [{
                type: Output,
                args: ['droppedStart']
            }], end: [{
                type: Output,
                args: ['droppedEnd']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { NgScrollDropped, NgScrollReached };
//# sourceMappingURL=ngx-scrollbar-reached-event.mjs.map
