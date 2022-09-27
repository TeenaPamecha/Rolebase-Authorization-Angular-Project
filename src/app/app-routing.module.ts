import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules,PreloadingStrategy } from '@angular/router';

import { AuthGuard, Role } from './core';

const routes: Routes = [
  {
    path: 'normalUser',
    loadChildren: () =>
      import('./shared/shared.module').then(
        (m) => m.SharedModule
      ),
    canActivate: [AuthGuard],
    data: { roles: [Role.User] }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./shared/shared.module').then(
        (m) => m.SharedModule
      ),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
