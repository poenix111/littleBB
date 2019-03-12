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
  constructor(public router: Router, public service: ParamService, public http : HttpClient) {
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log(this.user.length)
    this.user = this.service.info;
    this.userCopy = this.user;
    console.log(this.user);
    this.data = this.user;
  }
  actualizar(){
    const useful = Global.dominio + '/editar-usuario';
    this.http.post(useful, this.data).subscribe( info => {
      console.log(useful);
    }, error =>{
      console.log('ERROR');
    });

    this.router.navigateByUrl('mostrar-usuarios');
  }
}
