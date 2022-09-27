import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import * as fromComponents from './components';
import * as formSharedComponents from '../shared';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'user',
            component:fromComponents.UserComponent,
            children: [
              {
                path: 'profile',
                component:formSharedComponents.ProfileComponent,
                children: [],
              },
              {
                path: 'change-password',
                component:formSharedComponents.ChangePasswordComponent,
                children: [],
              },
              { path: '', redirectTo: 'profile', pathMatch: 'full' },
            ],
          },
          {
            path: 'role-list',
            component:fromComponents.RoleListComponent,
            children: [],
          },
          {
            path: 'settings',
            component:fromComponents.SettingComponent,
            children: [],
          },
          {
            path: 'reports',
            component:fromComponents.ReportComponent,
            children: [],
          },
          { path: '', redirectTo: 'user', pathMatch: 'full' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
