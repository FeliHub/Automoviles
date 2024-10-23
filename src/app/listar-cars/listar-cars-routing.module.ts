import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCarsPage } from './listar-cars.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCarsPageRoutingModule {}
