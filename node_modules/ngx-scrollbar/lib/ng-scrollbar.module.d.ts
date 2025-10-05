import { Provider, EnvironmentProviders } from '@angular/core';
import { NgScrollbarOptions } from './ng-scrollbar.model';
import * as i0 from "@angular/core";
import * as i1 from "./ng-scrollbar";
import * as i2 from "./viewport/scroll-viewport";
import * as i3 from "./ng-scrollbar-ext";
import * as i4 from "./async-detection";
import * as i5 from "./sync-spacer";
export declare class NgScrollbarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgScrollbarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgScrollbarModule, never, [typeof i1.NgScrollbar, typeof i2.ScrollViewport, typeof i3.NgScrollbarExt, typeof i4.AsyncDetection, typeof i5.SyncSpacer], [typeof i1.NgScrollbar, typeof i2.ScrollViewport, typeof i3.NgScrollbarExt, typeof i4.AsyncDetection, typeof i5.SyncSpacer]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgScrollbarModule>;
}
export declare function provideScrollbarOptions(options: NgScrollbarOptions): Provider[];
export declare function provideScrollbarPolyfill(url: string): EnvironmentProviders;
