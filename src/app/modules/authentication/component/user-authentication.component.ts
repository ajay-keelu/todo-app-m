import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrl: './user-authentication.component.scss'
})
export class UserAuthenticationComponent {
  Title: string;
  isSignIn: Boolean;
  showHidePassword: boolean;
  user: User;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private toastr: ToastrService, private router: Router) {
    this.Title = '';
    this.isSignIn = false;
    this.showHidePassword = false;
    this.user = new User({});
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.Title = data['Title'];
      this.isSignIn = data['isSignIn']
    });
    if (localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/dashboard')
    }
  }

  passwordAction(): void {
    this.showHidePassword = !this.showHidePassword
  }

  signUp(form: NgForm): void {
    if (form.valid) {
      this.isLoading = true;
      if (!this.isSignIn) {
        this.authenticationService.loginUser(this.user).subscribe({
          next: (data: any) => {
            this.isLoading = false;
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            this.router.navigateByUrl('/dashboard');
          },
          error: (err) => {
            if (err.status != 0)
              this.toastr.error(err.error);
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
          }
        })
      } else {
        this.authenticationService.register(this.user).subscribe({
          next: (data) => {
            this.toastr.success(data);
            this.isLoading = false;
            this.router.navigateByUrl('/login')
          },
          error: (err) => {
            this.toastr.error(err.error);
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
          }
        })
      }
    } else {
      this.toastr.error("Please fill fields")
    }
  }

}
