import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import * as fromGuards from './guards';
import * as fromModels from './models';
import * as fromInterceptors from './interceptors';
import * as fromServices from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards,
    ...fromInterceptors.interceptors
  ],
  declarations: [],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
