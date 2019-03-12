import { Component, OnInit } from '@angular/core';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ParamService} from '../param.service'
@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.page.html',
  styleUrls: ['./mostrar-usuarios.page.scss'],
})
export class MostrarUsuariosPage implements OnInit {
  buscar = '';
  usuarios = []
  constructor(public http: HttpClient, public router:Router, public service:ParamService) { }

  ngOnInit() {
  }

  mostrar() {
    if (this.buscar === '*') {
      const useful = Global.dominio + '/recuperar-usuarios';

      this.http.get(useful).subscribe(data => {
        // tslint:disable-next-line: forin
        for (const u in data) {
          this.usuarios.push(data[u]);
        }
      }, error => {
      });

    }
  }
  presentModal(user) {
    this.router.navigateByUrl('/editar-usuarios');
    this.service.info = user;
  }

}
