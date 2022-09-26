import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import * as fromComponents from './components';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'role-list',
            component:fromComponents.RoleListComponent,
            children: [],
          },
          {
            path: 'user',
            component:fromComponents.UserComponent,
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
          { path: '', redirectTo: 'role-list', pathMatch: 'full' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
