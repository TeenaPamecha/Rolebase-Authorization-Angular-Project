import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as fromPipes from './pipes';
import * as fromComponents from './components';
import * as fromDirectives from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...fromPipes.pipes,
    ...fromComponents.components,
    ...fromDirectives.directives
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromPipes.pipes,
    ...fromComponents.components,
    ...fromDirectives.directives
  ],
})
export class SharedModule {}
