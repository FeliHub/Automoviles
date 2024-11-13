import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private apiUrl = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '7088f73db2mshb6e1a58e54a2260p12c8c2jsn25dd5ce208d8',
    'x-rapidapi-host': 'car-data.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
}




