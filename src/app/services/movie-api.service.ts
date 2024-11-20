import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '99eecdfa58msh5054db80e1cc2a4p1b0c87jsn8ad641b29b85',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getTopMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
}
