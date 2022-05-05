import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
  }
    
  constructor(private userService: UserService, private router: Router) { }

  submit(): void {
    this.userService.register({ user: this.user })
    .subscribe(() => this.router.navigate(['/login']))
  }
}
