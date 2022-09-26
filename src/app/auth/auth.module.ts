import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { components } from './components';

@NgModule({
    imports: [SharedModule, FormsModule, ReactiveFormsModule, CommonModule, AuthRoutingModule],
    declarations: [AuthComponent, components],
    providers: [],
})
export class AuthModule { }
