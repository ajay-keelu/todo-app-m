import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HomeComponent } from './modules/home/component/home.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ActiveModule } from './modules/active/active.module';
import { CompletedModule } from './modules/completed/completed.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './interceptor/header.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { UtilityService } from './services/utility/utility.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { TaskService } from './services/todo/task.service';
import { HomeModule } from './modules/home/home.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterOutlet,
    AuthenticationModule,
    DashboardModule,
    ActiveModule,
    HomeModule,
    CompletedModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [provideHttpClient(withInterceptors([headerInterceptor])), provideAnimations(), provideToastr(), UtilityService, AuthenticationService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
