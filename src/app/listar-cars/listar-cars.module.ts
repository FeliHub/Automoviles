import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListaCarsComponent } from '../components/lista-cars/lista-cars.component';

import { ListarCarsPage } from './listar-cars.page';
import { ListarCarsPageRoutingModule } from './listar-cars-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCarsPageRoutingModule
  ],
  declarations: [ListarCarsPage, ListaCarsComponent]
})
export class ListarCarsPageModule {}
