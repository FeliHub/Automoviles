import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slides = [
    {
      img: 'assets/img/auto1.png',
      titulo: 'visible changes today'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
