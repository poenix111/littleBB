import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrestamoDevolucionPage } from './prestamo-devolucion.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoDevolucionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrestamoDevolucionPage]
})
export class PrestamoDevolucionPageModule {}
