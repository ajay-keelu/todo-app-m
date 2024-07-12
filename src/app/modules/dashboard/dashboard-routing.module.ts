import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard.component';
import { PageNotFoundComponent } from '../shared/common/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
