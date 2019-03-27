import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Global} from '../global';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  nombre = '';
  usuario = '';
  contra = '';
  tipo = '';
  email = '';
  telefono = '';
  area = '';
  constructor(public http: HttpClient) { }
  ngOnInit() {
  }
  registrarUser() {
// tslint:disable-next-line: max-line-length
    const useful = Global.dominio + '/registrar-usuario-api?nombre=' + this.nombre + '&usuario=' + this.usuario + '&contra=' + this.contra + '&tipo=' + this.tipo + '&email=' + this.email + '&telefono=' + this.telefono + '&area=' + this.area;
    if (this.usuario.length < 8) {
      this.http.get(useful).subscribe(data =>{
        console.log('NICE');
      }, error =>{
        console.log('ERROR');
      });
    }
    console.log(useful);
  }
}
