import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModalComponent } from './common/modal/modal.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { TaskListComponent } from './common/task-list/task-list.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { LoaderComponent } from './common/loader/loader.component';

@NgModule({
  declarations: [CommonModalComponent, SidenavComponent, HeaderComponent, TaskListComponent, PageNotFoundComponent, DropdownComponent, LoaderComponent],

  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CommonModalComponent, SidenavComponent, HeaderComponent, TaskListComponent, PageNotFoundComponent, DropdownComponent, LoaderComponent],
})
export class SharedModule {

}
