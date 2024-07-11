import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationComponent } from './modules/authentication/component/user-authentication.component';
import { routeGuard } from './route-guard/route.guard';
import { HomeComponent } from './components/home/home.component';
import { ActiveComponent } from './modules/active/component/active.component';
import { CompletedComponent } from './modules/completed/component/completed.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './modules/dashboard/component/dashboard.component';
import { PageNotFoundComponent } from './modules/shared/common/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'signin',
        component: UserAuthenticationComponent,
        data: {
            Title: 'To-Do App',
            isSignIn: true
        }
    },
    {
        path: 'login',
        component: UserAuthenticationComponent,
        data: {
            Title: 'To-Do App',
            isSignIn: false
        }
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [routeGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'active',
                component: ActiveComponent,
            },
            {
                path: 'completed',
                component: CompletedComponent,
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
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