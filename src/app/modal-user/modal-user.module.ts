import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalUserPage } from './modal-user.page';
import { ComponentsModule } from '../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: ModalUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalUserPage]
})
export class ModalUserPageModule {}
