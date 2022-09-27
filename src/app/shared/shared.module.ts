import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule} from './shared-routing.module';

import * as fromPipes from './pipes';
import * as fromComponents from './components';
import * as fromDirectives from './directives';
import * as fromLayout from './components/layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  declarations: [
    ...fromPipes.pipes,
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromLayout.layout
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromPipes.pipes,
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromLayout.layout
  ],
})
export class SharedModule {}
