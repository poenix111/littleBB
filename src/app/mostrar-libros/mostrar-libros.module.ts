import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarLibrosPage } from './mostrar-libros.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarLibrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarLibrosPage]
})
export class MostrarLibrosPageModule {}
