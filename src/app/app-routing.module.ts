import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { Role } from './core/models';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./normalUser/normalUser.module').then(
            (m) => m.NormalUserModule
          ),
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
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
      path: '',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
