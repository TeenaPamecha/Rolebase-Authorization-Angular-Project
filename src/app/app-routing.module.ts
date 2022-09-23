import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './core/guards/auth.guard';
import { Role } from './core/models';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(
            (m) => m.HomeModule
          ),
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        loadChildren: () =>
        import('./admin/admin.module').then(
          (m) => m.AdminModule
        ),
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
