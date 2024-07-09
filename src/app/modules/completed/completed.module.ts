import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedRoutingModule } from './completed-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CompletedComponent } from '../../components/completed/completed.component';


@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    CompletedRoutingModule,
    SharedModule
  ],
  exports: [CompletedComponent]
})
export class CompletedModule { }
