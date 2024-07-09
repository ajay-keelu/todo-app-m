import { Component, Input } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() Title: string = ''

  constructor(private utility: UtilityService) { }

  modelOpen(): void {
    this.utility.isModelOpen = true;
  }
}
