import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { GenreService } from 'src/app/services/genre.service';
@Component({
  selector: 'app-genre-detailed',
  templateUrl: './genre-detailed.component.html',
  styleUrls: ['./genre-detailed.component.css']
})
export class GenreDetailedComponent implements OnInit {
  books = []
  genre

  constructor(private route: ActivatedRoute, private bookService: BookService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.bookService.getBooksByCategory(param.id).subscribe(
        books => { this.books = books })
      this.genreService.getGenres().subscribe(data => {
        this.genre = data.find(genre => genre.id == param.id)
      })
    })
  }
}
