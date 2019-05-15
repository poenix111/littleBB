import { Component, OnInit } from '@angular/core';
import {Global} from '../global';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-mostrar-material',
  templateUrl: './mostrar-material.page.html',
  styleUrls: ['./mostrar-material.page.scss'],
})
export class MostrarMaterialPage implements OnInit {
  buscar = '';
  materiales = [];
  constructor(public http: HttpClient, public router:Router, public service:ParamService) { }
  user: any;
  show: boolean;
  ngOnInit() {
    if (!this.service.backToHome()) {
      this.user = JSON.parse(sessionStorage.getItem('usuario'));
      if (this.user !== null) {
        this.show = true;
      }
    }
  }

  mostrar() {
    this.materiales = [];
    if (this.buscar === '*' || this.buscar === '') {
      const useful = Global.dominio + '/recuperar-material/';
      this.http.get(useful).subscribe(data => {

// tslint:disable-next-line: forin
        for (const m in data) {
          this.materiales.push(data[m]);
        }

      }, error => {

      });

    }
  }

  sendInfo(material){
    this.router.navigateByUrl('/editar-material');
    this.service.info = material;
  }


  borrar(material) {
    const useful = Global.dominio + '/delete-material';
    this.http
      .post(useful, JSON.stringify(material), {
        headers: this.service.reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
          if (info === 'Error') {
            this.service.presentAlert(
              'Error al borrar el material',
              'El material esta prestado, por lo tanto no se puede borrar'
            );
          } else {
            this.materiales.splice(this.materiales.indexOf(material), 1);

          }
        },
        error => {
          console.log(error);
        }
      );
  }

}
