import { Injectable } from '@angular/core';
import { Genre } from '../types'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  url = 'http://localhost:8000/api/genres/'

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.url)
  }

}
