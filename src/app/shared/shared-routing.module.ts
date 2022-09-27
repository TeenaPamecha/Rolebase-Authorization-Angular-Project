import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AdminComponent } from '../admin/admin.component';
// import { NormalUserComponent } from '../normalUser/normalUser.component';

// import * as fromNormalComponents from '../normalUser/components';
// import * as fromAdminComponents from '../admin/components';
// import * as formSharedComponents from '.';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then(
        (m) => m.AdminModule
      )
    // children: [
    //   {
    //     path: 'role-list',
    //     component:fromAdminComponents.RoleListComponent,
    //     children: [],
    //   },
    //   {
    //     path: 'user',
    //     component:fromAdminComponents.UserComponent,
    //     children: [
    //       {
    //         path: 'profile',
    //         component:formSharedComponents.ProfileComponent,
    //         children: [],
    //       },
    //       {
    //         path: 'change-password',
    //         component:formSharedComponents.ChangePasswordComponent,
    //         children: [],
    //       },
    //       { path: '', redirectTo: 'profile', pathMatch: 'full' },
    //     ],
    //   },
    //   {
    //     path: 'settings',
    //     component:fromAdminComponents.SettingComponent,
    //     children: [],
    //   },
    //   {
    //     path: 'reports',
    //     component:fromAdminComponents.ReportComponent,
    //     children: [],
    //   },
    //   { path: '', redirectTo: 'role-list', pathMatch: 'full' },
    // ]
  },
  {
    path: 'normalUser',
    loadChildren: () =>
    import('../normalUser/normalUser.module').then(
      (m) => m.NormalUserModule
    )
    // children: [
    //   {
    //     path: 'home',
    //     component: fromNormalComponents.HomeComponent,
    //     children: [],
    //   },
    //   {
    //     path: 'user',
    //     component: fromNormalComponents.UserComponent,
    //     children: [
    //       {
    //         path: 'profile',
    //         component: formSharedComponents.ProfileComponent,
    //         children: [],
    //       },
    //       {
    //         path: 'change-password',
    //         component: formSharedComponents.ChangePasswordComponent,
    //         children: [],
    //       },
    //       { path: '', redirectTo: 'profile', pathMatch: 'full' },
    //     ],
    //   },
    //   { path: '', redirectTo: 'home', pathMatch: 'full' }
    // ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
