import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalUserComponent } from './normalUser.component';
import * as formComponents from './components';

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
        children: [],
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormalUserRoutingModule { }
