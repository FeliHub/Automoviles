import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage {

  getdata:any[]=[];
  constructor(public app:ApiService) {
    
    this.app.getdata<[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    })
  }
  
/*
  constructor(private api: ApiService) {
    this.api.getPosts().subscribe((res) => {
      console.log(res[0]);
    }, (error) => {
      console.log(error);
    });
  }
*/

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }
}
