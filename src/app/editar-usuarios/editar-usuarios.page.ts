import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';
import {Global} from '../global';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.page.html',
  styleUrls: ['./editar-usuarios.page.scss'],
})
export class EditarUsuariosPage implements OnInit {
  user = [];
  userCopy;
  vivo = false;
  data = {
    /* 'id_usuario':0,
    'nombre': '',
    'tipo': '',
    'email': '',
    'telefono': '',
    'pass': '',
    'area': '',
    'penalizaciones':0 */
  };
  help = true;
  tipoReal:string;
  estado :string;
  constructor(public router: Router, public service: ParamService, public http : HttpClient) {
    console.log(this.user.length)
    this.user = this.service.info;
    this.userCopy = this.user;
    console.log(this.user);
    this.data = this.user;
    this.user['pass'] = '';
    if(this.user['tipo'] === 1) {
      this.tipoReal = 'Estudiante';
    }
    else if(this.user['tipo'] === 2) {
      this.tipoReal = 'Maestro';
    }
    else if(this.user['tipo'] === 3) {
      this.tipoReal = 'Bibliotecario';
    }

    if(this.user['estado'] === 1){
      this.estado = 'Activo';
    }
    else if(this.user['estdo'] === 0){
      this.estado = 'Inactivo';
    }
  }

  ngOnInit() {
    this.service.backToHome();

  }
  ionViewDidEnter(){
  }
  actualizar(){
    const useful = Global.dominio + '/editar-usuario';
    this.http.post(useful, this.data, {headers : this.service.reqHeader, responseType: 'text'}).subscribe( info => {
      console.log(useful);
    }, error =>{
      console.log('ERROR');
    });

    this.router.navigateByUrl('mostrar-usuarios');
  }
}
