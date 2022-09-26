import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NormalUserModule } from './normalUser/normalUser.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module'

import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './core/interceptors';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        NormalUserModule,
        AdminModule,
        AuthModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }