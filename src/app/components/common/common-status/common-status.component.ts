import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../models/Task';
import { TaskService } from '../../../services/todo/task.service';
import { UtilityService } from '../../../services/utility/utility.service';
import { SharedModule } from '../../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-status',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './common-status.component.html',
  styleUrl: './common-status.component.scss'
})
export class CommonStatusComponent implements OnInit, DoCheck {
  curDate: Date;
  Title: string;
  tasks: Task[];
  task: Task;
  isModelOpen: boolean;
  constructor(private route: ActivatedRoute, private taskService: TaskService, private utility: UtilityService) {
    this.curDate = new Date();
    this.Title = '';
    this.tasks = [];
    this.task = new Task({});
    this.isModelOpen = false;
  }

  ngOnInit(): void {
    this.getTasks();
  }
  ngDoCheck(): void {
    this.isModelOpen = this.utility.isModelOpen;
  }
  getTasks(): void {
    this.route.data.subscribe(data => {
      this.Title = data['Title']
      this.Title == 'Active' ? this.getActiveTasks() : this.getCompetedTasks();
    })
  }

  getActiveTasks(): void {
    this.taskService.getActiveTasks().subscribe((data: Task[]) => this.tasks = data)
  }

  getCompetedTasks(): void {
    this.taskService.getCompletedTasks().subscribe((data: Task[]) => this.tasks = data)
  }

  editTask(event: Task | any) {
    this.task = event
    this.utility.isModelOpen = true;
  }
}
