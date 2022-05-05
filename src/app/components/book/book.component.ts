import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivationEnd, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book
  order = {
    name: '',
    status: 'pending',
    phone: '',
    address: '',
    book: 0
  }

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.bookService.getBook(id).subscribe(book => {
      this.book = book
    })
  }

  submit(): void {
    this.order.book = this.book.id
    this.bookService.orderBook(this.order)
  }
}
