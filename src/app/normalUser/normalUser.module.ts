import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NormalUserRoutingModule } from './normalUser-routing.module';
import { NormalUserComponent } from './normalUser.component';
import { layout } from './layout';
import { components } from './components';

@NgModule({
  imports: [SharedModule, NormalUserRoutingModule],
  declarations: [NormalUserComponent, layout,components],
  providers: [],
})
export class NormalUserModule { }
