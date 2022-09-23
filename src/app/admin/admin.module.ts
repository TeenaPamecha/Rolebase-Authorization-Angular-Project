import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AdminComponent],
  providers: [],
})
export class AdminModule {}
