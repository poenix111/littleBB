import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent
  ],
  exports: [
    ToolbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
