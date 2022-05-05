import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books = []

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data
    })
  }

}
