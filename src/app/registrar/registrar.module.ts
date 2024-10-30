import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CarsComponent } from '../components/cars/cars.component';

import { RegistrarPage } from './registrar.page';
import { RegistrarPageRoutingModule } from './registrar-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPageRoutingModule
  ],
  declarations: [RegistrarPage, CarsComponent]
})
export class RegistrarPageModule {}
