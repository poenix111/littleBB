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
  { path: 'registrar-libro', loadChildren: './registrar-libro/registrar-libro.module#RegistrarLibroPageModule' },
  { path: 'registrar-material', loadChildren: './registrar-material/registrar-material.module#RegistrarMaterialPageModule' },
  { path: 'mostrar-usuarios', loadChildren: './mostrar-usuarios/mostrar-usuarios.module#MostrarUsuariosPageModule' },
  { path: 'mostrar-libros', loadChildren: './mostrar-libros/mostrar-libros.module#MostrarLibrosPageModule' },
  { path: 'mostrar-material', loadChildren: './mostrar-material/mostrar-material.module#MostrarMaterialPageModule' },
  { path: 'editar-usuarios', loadChildren: './editar-usuarios/editar-usuarios.module#EditarUsuariosPageModule' },
  { path: 'editar-libro', loadChildren: './editar-libro/editar-libro.module#EditarLibroPageModule' },
  { path: 'editar-material', loadChildren: './editar-material/editar-material.module#EditarMaterialPageModule' },
  { path: 'modal-user', loadChildren: './modal-user/modal-user.module#ModalUserPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
