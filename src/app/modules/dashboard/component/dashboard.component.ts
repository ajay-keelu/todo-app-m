import { Component, DoCheck, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../../services/todo/task.service';
import { UtilityService } from '../../../services/utility/utility.service';
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, DoCheck {
  curDate: Date = new Date();
  activeTasks: Task[];
  completedTasks: Task[];
  isModelOpen: boolean;
  completedTasksPercent: number;
  activeTasksPercent: number;
  constructor(private taskService: TaskService, private utility: UtilityService, private toast: ToastrService) {
    this.activeTasks = [];
    this.completedTasks = [];
    this.isModelOpen = false;
    this.completedTasksPercent = 0;
    this.activeTasksPercent = 0;
  }

  ngOnInit(): void {
    this.getTasks();
  }

  ngDoCheck(): void {
    this.getTasksPercent();
    this.isModelOpen = this.utility.isModelOpen;
  }

  getTasks(): void {
    this.getActiveTasks();
    this.getCompletedTasks();
  }

  getActiveTasks(): void {
    this.taskService.getActiveTasks().subscribe((data: Task[]) => this.activeTasks = data)
  }

  getCompletedTasks(): void {
    this.taskService.getCompletedTasks().subscribe((data: Task[]) => this.completedTasks = data)
  }

  deleteAll(): void {
    if (confirm("Are you sure to delete all tasks")) {
      this.taskService.deleteAll().subscribe({
        next: data => { this.toast.success(data); this.getTasks() },
        error: err => this.toast.error(err.error)
      })
    }
  }

  getTasksPercent(): void {
    let totalTasksLength: number = this.activeTasks.length + this.completedTasks.length;
    this.completedTasksPercent = totalTasksLength > 0 ? Math.round((this.completedTasks.length / totalTasksLength) * 100) : 0;
    this.activeTasksPercent = totalTasksLength > 0 ? Math.round((this.activeTasks.length / totalTasksLength) * 100) : 0;
  }
}
