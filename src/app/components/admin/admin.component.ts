import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  book = {
    id: 0,
    name: '',
    genre: '',
    author: '',
    description: '',
    image: '',
    price: 0,
  }
  orders = []

  constructor(private bookService: BookService, private router: Router) { }

  logged: boolean = false
  
  logout() {
    localStorage.clear()
    this.logged = false
  }

  ngOnInit(): void {
    this.bookService.getOrders().subscribe(
      orders => {this.orders = orders}
    )

    const isLogged = localStorage.getItem('token')

    if(isLogged) this.logged = true
  }

  create(): void {
    this.bookService.createBook(this.book)
    .subscribe(() => { this.router.navigate(['/main']) })
  }

  deleteOrder(id): void {
    this.bookService.deleteOrder(id)
      .subscribe({
        next: () => this.bookService.getBooks()
      })
  }
}
