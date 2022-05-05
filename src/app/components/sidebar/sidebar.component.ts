import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  public genres = []

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(data => {
      this.genres = data
    })
  }

}
