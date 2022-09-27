import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalUserComponent } from './normalUser.component';
import * as formComponents from './components';
import * as formSharedComponents from '../shared';

const routes: Routes = [
  {
    path: '',
    component: NormalUserComponent,
    children: [
      {
        path: 'home',
        component: formComponents.HomeComponent,
        children: [],
      },
      {
        path: 'user',
        component: formComponents.UserComponent,
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
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormalUserRoutingModule { }
