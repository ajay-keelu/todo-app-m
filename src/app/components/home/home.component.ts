import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilityService } from '../../services/utility/utility.service';
import { LoaderComponent } from '../common/loader/loader.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared/shared.module';
import { DashboardModule } from '../../modules/dashboard/dashboard.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, DashboardModule, RouterOutlet, LoaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = "To-Do App"

}
