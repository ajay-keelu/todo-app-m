import { Component, DoCheck } from '@angular/core';
import { UtilityService } from './services/utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements DoCheck {
  title = 'To-Do App';
  isModelOpen: boolean;

  constructor(private utility: UtilityService) {
    this.isModelOpen = false;
  }

  ngDoCheck(): void {
    this.isModelOpen = this.utility.isModelOpen;
  }
}
