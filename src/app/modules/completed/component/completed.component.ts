import { Component } from '@angular/core';
import { Task } from '../../../models/Task';
import { TaskService } from '../../../services/todo/task.service';
import { UtilityService } from '../../../services/utility/utility.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  curDate: Date;
  Title: string;
  tasks: Task[];
  task: Task;
  modal: boolean;
  constructor(private taskService: TaskService, private utility: UtilityService) {
    this.curDate = new Date();
    this.Title = 'Completed';
    this.tasks = [];
    this.task = new Task({});
    this.modal = false;
  }

  ngOnInit(): void {
    this.getTasks();
  }
  ngDoCheck(): void {
    this.modal = this.utility.isModelOpen;
  }
  getTasks(): void {
    this.getCompetedTasks();
  }

  getCompetedTasks(): void {
    this.taskService.getCompletedTasks().subscribe((data: Task[]) => this.tasks = data)
  }

}
