import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent,
    DatagridComponent,
    ModalUserComponent,
  ],
  exports: [
    ToolbarComponent,
    MenuComponent,
    DatagridComponent,
    ModalUserComponent
  ],
  imports: [FormsModule, CommonModule, IonicModule, RouterModule]
})
export class ComponentsModule {}
