import { NgModule } from '@angular/core';
import { ActiveRoutingModule } from './active-routing.module';
import { TaskService } from '../../services/todo/task.service';
import { ActiveComponent } from './component/active.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ActiveComponent],
  imports: [
    ActiveRoutingModule,
    SharedModule,
    CommonModule,
  ], providers: [TaskService],
  exports: [ActiveComponent],
})
export class ActiveModule { }
