import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  submit(): void {
    this.userService.login({ user: this.user })
    .subscribe(({ user }) => {
        localStorage.setItem('token', user.token)
        localStorage.setItem('username', user.username)

        this.router.navigate(['/manager-panel'])
      }
    )
  }
}
