import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { components } from './components';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [AdminComponent, components],
  providers: [],
})
export class AdminModule { }
