import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/common/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'active',
      loadChildren: () => import('../active/active.module').then(e => e.ActiveModule),
    },
    {
      path: 'completed',
      loadChildren: () => import('../completed/completed.module').then(m => m.CompletedModule)
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
