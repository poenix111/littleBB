import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private menu: MenuController) { }
  title = 'Home';
  ngOnInit() { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  go_login() {
    this.router.navigateByUrl('/login');
    this.title = 'Login';
  }
  go_prestamo() {
    this.router.navigateByUrl('/prestamo-libro');
    this.title = 'Prestamo Libro';
  }
  go_devolucion() {
    this.router.navigateByUrl('/devolucion');
    this.title = 'Devolucion';
  }
  go_registroUser(){
    this.router.navigateByUrl('/registrar-usuario');
    this.title = 'Registro usuario';
  }
  go_registroLibro(){
    this.router.navigateByUrl('/registrar-libro');
    this.title = 'Registro libro';
  }
  go_registroMaterial(){
    this.router.navigateByUrl('/registrar-material');
    this.title = 'Registro material';
  }

  go_mostrarLibros(){
    this.router.navigateByUrl('/mostrar-libros');
    this.title = 'Mostrar libros';
  }
  go_mostrarMaterial(){
    this.title = 'Mostrar material';
    this.router.navigateByUrl('/mostrar-material');
  }
}
