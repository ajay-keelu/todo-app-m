import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationComponent } from './component/user-authentication.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserAuthenticationComponent,
    data: {
      Title: 'To-Do App',
      isSignIn: false
    }
  }, {
    path: 'signin',
    component: UserAuthenticationComponent,
    data: {
      Title: 'To-Do App',
      isSignIn: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }