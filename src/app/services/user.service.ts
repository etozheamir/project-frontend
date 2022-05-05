import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../types'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:8000/api/'

  login(user): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(this.url + 'users/login', user)
  }
  
  register(user): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(this.url + 'users/register', user)
  }
}
