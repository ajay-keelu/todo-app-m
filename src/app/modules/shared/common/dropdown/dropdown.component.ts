import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  routes: any[];
  curRoute: string;
  dropdown: boolean;

  constructor(private router: Router) {
    this.curRoute = this.router.url as string;
    console.warn(router);
    this.dropdown = false;
    this.routes = [{
      link: '/dashboard',
      value: 'Dashboard'
    }, {
      link: '/active',
      value: 'Active'
    },
    {
      link: '/completed',
      value: 'Completed'
    }]
  }

  showDropdown(dropdown: boolean) {
    this.dropdown = dropdown
  }
}
