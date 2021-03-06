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
  tipo = '1';
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
    let useful = Global.dominio + '/recuperar-usuarios';
    if (this.tipo === '1' && this.buscar !== '') {
      useful += '?nombre=';
    } else if (this.tipo === '2' && this.buscar !== '') {
      useful += '?matricula=';
    }

    useful += this.buscar;

      this.usuarios = [];
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
          } else {
            this.usuarios.splice(this.usuarios.indexOf(user), 1);

          }
        },
        error => {
          console.log(error);
        }
      );
  }

  trackByFn(index, item) {
    return index; // or item.id
}
  
}
