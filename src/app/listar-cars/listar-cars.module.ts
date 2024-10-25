import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListarCarsPageRoutingModule } from './listar-cars-routing.module';
import { ListarCarsPage } from './listar-cars.page';
import { ListaCarsComponent } from '../components/lista-cars/lista-cars.component';

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
