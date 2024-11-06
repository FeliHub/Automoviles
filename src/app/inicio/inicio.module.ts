import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';
//import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    //HttpClient
  ],
  declarations: [InicioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioPageModule {}
