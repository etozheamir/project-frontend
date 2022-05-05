import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged: boolean = false
  
  constructor() { }

  ngOnInit(): void {
    const isLogged = localStorage.getItem('token')

    if(isLogged) this.logged = true
  }

  logout() {
    localStorage.clear()
    this.logged = false
  }

}
