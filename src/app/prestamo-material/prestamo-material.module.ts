import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrestamoMaterialPage } from './prestamo-material.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoMaterialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrestamoMaterialPage]
})
export class PrestamoMaterialPageModule {}
