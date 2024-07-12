import { RouterModule, Routes } from '@angular/router';
import { routeGuard } from './route-guard/route.guard';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './modules/shared/common/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        canActivate: [routeGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }