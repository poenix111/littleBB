import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent,
    DatagridComponent,
  ],
  exports: [
    ToolbarComponent,
    MenuComponent,
    DatagridComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
