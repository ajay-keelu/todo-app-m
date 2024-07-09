import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilityService } from './services/utility/utility.service';
import { SharedModule } from './modules/shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationModule, DashboardModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
