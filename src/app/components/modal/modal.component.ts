import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilityService } from '../../services/utility/utility.service';
import { TaskService } from '../../services/todo/task.service';
import { Task } from '../../models/Task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() Modal: boolean = false;
  @Input() task: Task;
  @Output() ReloadTasks: EventEmitter<any>;
  @Output() EditTask: EventEmitter<any>;

  constructor(private utility: UtilityService, private taskService: TaskService, private toastService: ToastrService) {
    this.task = new Task({});
    this.EditTask = new EventEmitter<any>();
    this.ReloadTasks = new EventEmitter<any>();
  }

  submit(form: NgForm) {
    if (form.valid) {
      this.taskService.create(this.task).subscribe({
        next: data => { this.toastService.success(data); this.ReloadTasks.emit() },
        error: err => this.toastService.error(err.error),
        complete: () => { this.closeModal(form) }
      });
    }
  }

  update(form: NgForm) {
    if (form.valid) {
      this.taskService.update(this.task).subscribe({
        next: data => { this.toastService.success(data); this.ReloadTasks.emit() },
        error: err => this.toastService.error(err.error),
        complete: () => { this.closeModal(form) }
      });
    }
  }

  closeModal(form: NgForm) {
    this.utility.isModelOpen = false;
    this.task = new Task({})
    this.EditTask.emit();
    form.reset()
  }
}
