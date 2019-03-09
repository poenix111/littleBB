import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'prestamo-libro', loadChildren: './prestamo-libro/prestamo-libro.module#PrestamoLibroPageModule' },
  { path: 'devolucion', loadChildren: './devolucion/devolucion.module#DevolucionPageModule' },
  { path: 'prestamo-libro', loadChildren: './prestamo-libro/prestamo-libro.module#PrestamoLibroPageModule' },
  { path: 'registrar-usuario', loadChildren: './registrar-usuario/registrar-usuario.module#RegistrarUsuarioPageModule' },
  { path: 'registrar-usuario', loadChildren: './registrar-usuario/registrar-usuario.module#RegistrarUsuarioPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
