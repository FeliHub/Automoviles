import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(private http: HttpClient) {
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

  ngOnInit() {
    this.http.get('https://car-data.p.rapidapi.com/cars')
    .subscribe(res =>{
      console.log('se ha cargado')
    })
  }

}
