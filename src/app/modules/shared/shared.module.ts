import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { HeaderComponent } from '../../components/common/header/header.component';
import { TaskListComponent } from '../../components/common/task-list/task-list.component';
import { PageNotFoundComponent } from '../../components/common/page-not-found/page-not-found.component';
import { DropdownComponent } from '../../components/common/dropdown/dropdown.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidenavComponent, HeaderComponent, TaskListComponent, PageNotFoundComponent, DropdownComponent, ModalComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [SidenavComponent, HeaderComponent, TaskListComponent, PageNotFoundComponent, DropdownComponent, ModalComponent]
})
export class SharedModule {

}
