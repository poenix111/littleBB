import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarUsuariosPage } from './editar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: EditarUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarUsuariosPage]
})
export class EditarUsuariosPageModule {}
