import { Routes } from '@angular/router';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';
import { routeGuard } from './route-guard/route.guard';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonStatusComponent } from './components/common/common-status/common-status.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { ActiveComponent } from './components/active/active.component';
import { CompletedComponent } from './components/completed/completed.component';

export const routes: Routes = [
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
