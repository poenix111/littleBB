import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.page.html',
  styleUrls: ['./devolucion.page.scss']
})
export class DevolucionPage implements OnInit {
  constructor(public http: HttpClient, public service: ParamService) {}
  data = {};
  prestados = [];
  user = {};
  isBook: boolean;
  controladorDatagrid: boolean;
  ngOnInit() {
    if (!this.service.backToHome()) {
      this.user = JSON.parse(sessionStorage.getItem('usuario'));
      this.controladorDatagrid = false;
    }
  }
  showLend() {
    if (this.isBook) {
      const useful = Global.dominio + '/show-lend';
      this.http
        .post(useful, this.data, {
          headers: this.service.reqHeader,
          responseType: 'text'
        })
        .subscribe(
          info => {
            /* this.service.libros = JSON.parse(info); */
            console.log(info);
            this.prestados = JSON.parse(info);
            this.service.folio = this.data['folio'];
          },
          error => {
            console.log('ERROR');
          }
        );
    } else {
      const useful = Global.dominio + '/show-lend-material';
      this.http
        .post(useful, this.data, {
          headers: this.service.reqHeader,
          responseType: 'text'
        })
        .subscribe(
          info => {
            /* this.service.libros = JSON.parse(info); */
            console.log(info);
            this.prestados = JSON.parse(info);
            this.service.folio = this.data['folio'];
          },
          error => {
            console.log('ERROR');
          }
        );
    }
  }

  searchType() {
    this.prestados = [];
    const useful = Global.dominio + '/tipo';
    this.http
      .post(useful, this.data, {
        headers: this.service.reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
          if (info === 'True') {
            this.isBook = true;
            this.controladorDatagrid = true;
          } else if (info === 'False') {
            this.isBook = false;
            this.controladorDatagrid = true;
          } else {
            this.controladorDatagrid = false;
          }
        },
        error => {
          console.log('ERROR');
        }
      );
  }

  
}
