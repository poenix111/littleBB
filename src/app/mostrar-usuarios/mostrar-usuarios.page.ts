import { Component, OnInit } from '@angular/core';
import { Global } from '../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.page.html',
  styleUrls: ['./mostrar-usuarios.page.scss']
})
export class MostrarUsuariosPage implements OnInit {
  buscar = '';
  usuarios = [];
  user = {};
  show: boolean;
  constructor(
    public http: HttpClient,
    public router: Router,
    public service: ParamService
  ) {}
  ngOnInit() {
    if (!this.service.backToHome()) {
      this.user = JSON.parse(sessionStorage.getItem('usuario'));
      if (this.user !== null) {
        this.show = true;
      }
    }
  }

  mostrar() {
    if (this.buscar === '*' || this.buscar === '') {
      const useful = Global.dominio + '/recuperar-usuarios';

      this.http.get(useful).subscribe(
        data => {
          // tslint:disable-next-line: forin
          for (const u in data) {
            this.usuarios.push(data[u]);
          }
        },
        error => {
          console.log('Error');
        }
      );
    }
  }
  presentModal(user) {
    this.router.navigateByUrl('/editar-usuarios');
    this.service.info = user;
  }

  borrar(user) {
    const useful = Global.dominio + '/delete-user';
    this.http
      .post(useful, JSON.stringify(user), {
        headers: this.service.reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
          if (info === 'Error') {
            this.service.presentAlert(
              'Error al borrar el usuario',
              'El usuario tiene prestamos pendites, por lo tanto no se puede borrar'
            );
          }
        },
        error => {
          console.log(error);
        }
      );
  }
  
}
