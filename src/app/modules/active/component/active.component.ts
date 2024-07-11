import { Component, DoCheck } from '@angular/core';
import { Task } from '../../../models/Task';
import { TaskService } from '../../../services/todo/task.service';
import { UtilityService } from '../../../services/utility/utility.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent implements DoCheck {
  curDate: Date;
  Title: string;
  tasks: Task[];
  task: Task;
  Modal: boolean;

  constructor(private taskService: TaskService, private utility: UtilityService) {
    this.curDate = new Date();
    this.Title = 'Active';
    this.tasks = [];
    this.task = new Task({});
    this.Modal = false;
  }

  ngOnInit(): void {
    this.getActiveTasks()
  }
  ngDoCheck(): void {
    this.Modal = this.utility.isModelOpen;
  }

  getActiveTasks(): void {
    this.taskService.getActiveTasks().subscribe((data: Task[]) => this.tasks = data)
  }

  editTask(event: Task | any) {
    this.task = event
    this.utility.isModelOpen = true;
  }
}
