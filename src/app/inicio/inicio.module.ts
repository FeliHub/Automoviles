import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CarsComponent } from '../components/cars/cars.component';

import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage, CarsComponent]
})
export class InicioPageModule {}
