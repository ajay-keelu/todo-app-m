import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from '../../../../services/utility/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() Title: string;


  constructor(private utility: UtilityService, private router: Router, private toastr: ToastrService) {
    this.Title = '';
  }

  modelOpen(): void {
    this.utility.isModelOpen = true;
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
