import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(public http:HttpClient) {}

  getdata<T> (url: string){
    url = 'http://universities.hipolabs.com/search?country=United+States'

    return this.http.get<T[]>(url);
  }
}