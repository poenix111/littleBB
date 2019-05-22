import { Component, OnInit } from '@angular/core';
import { Global } from '../global';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ParamService } from '../param.service';
/* import { ParamService } from '../param.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global'; */

@Component({
  selector: 'app-prestamo-material',
  templateUrl: './prestamo-material.page.html',
  styleUrls: ['./prestamo-material.page.scss']
})
export class PrestamoMaterialPage implements OnInit {
  data = {};
  userColor: boolean;
  materialColor: boolean;
  materiales = [];
  materialesPrestados = [];
  contMaterial: number;
  controlClock = false;
  date = new Date()
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
  dateNew = new Date(Date.now() + 1000 * 60 * 60 * 24)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
  penalizaciones: number;
  usuario = {};
  ticket = {};

  constructor(public http: HttpClient, public service: ParamService) {}

  ngOnInit() {
    /* this.timeout(); */

    if (!this.service.backToHome()) {
      this.contMaterial = 0;
      this.timeout();
    }
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  user() {
    this.materialesPrestados = [];
    this.materiales = [];
    this.contMaterial = 0;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });

    this.info(reqHeader);
    this.obtenerMateriales(reqHeader);
    this.searchContMaterials(reqHeader);
  }
  colorMaterial() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const useful = Global.dominio + '/material';
    this.http
      .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
      .subscribe(
        info => {
          if (info === 'False') {
            this.materialColor = false;
          } else {
            this.materialColor = true;
          }
        },
        error => {
          console.log('ERROR');
        }
      );
  }
  color() {

    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });

    const useful = Global.dominio + '/exists-maestro';
    this.http
      .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
      .subscribe(
        info => {
          /* console.log(info);
          console.log(this.penalizaciones); */
          if (info === 'True') {
            this.userColor = true;
            this.service.hasUser = true;
            this.controlClock = false;
          } else {
            this.userColor = false;
            this.service.hasUser = false;
          }
        },
        error => {
          /* console.log('ERROR'); */
          console.log(error);
        }
      );
  }

  searchContMaterials(reqHeader: HttpHeaders) {
    const useful = Global.dominio + '/cont-materials';
    this.http
      .post(useful, this.data, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          this.contMaterial = Number(info);
          console.log('contLibros ' + info);
          this.controlClock = true;
        },
        error => {
          console.log(error);
          this.controlClock = false;
        }
      );
  }

  pushMaterial() {
    if (this.materialesPrestados.includes(this.data['numSerie'])) {
      alert('Tiene ese libro en posesion');
      return;
    }
    if (this.contMaterial === 3) {
      alert('Ya no puede sacar libros por que tiene 3 en posesion');
      return;
    }

    if (this.materialColor && this.userColor) {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'No-Auth': 'True'
      });
      const useful = Global.dominio + '/material-exists';
      this.http
        .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
        .subscribe(
          info => {
            if (info === 'False') {
            } else {
              info = JSON.parse(info);
              if (this.materialesPrestados.includes(info['tipo'])) {
                alert('Ya tiene de ese tipo de material');
                return;
              }
              this.materialesPrestados.push(this.info['tipo']);

              info['date'] = this.date;
              info['dateEntrega'] = this.dateNew;
              /* this.service.libros.push(info); */
              this.materiales.push(info);
              this.data['numSerie'] = '';
              this.materialColor = false;
              this.contMaterial++;
            }
          },
          error => {
            console.log('ERROR');
          }
        );
    }
  }

  info(reqHeader: HttpHeaders) {
    const useful = Global.dominio + '/user-info';
    this.http
      .post(useful, this.data, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);

          if (info === 'False') {
          } else {
            info = JSON.parse(info);
            this.penalizaciones = info['penalizaciones'];
            console.log('penalizaciones ' + this.penalizaciones);
            this.service.userPrestmamo = info;
            this.controlClock = true;
          }
        },
        error => {
          console.log('ERROR');
          console.log(error);
          this.controlClock = false;
        }
      );
  }
  obtenerMateriales(reqHeader: HttpHeaders) {
    const useful = Global.dominio + '/materiales-en-posesion';
    this.http
      .post(useful, this.data, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          const materials = JSON.parse(info);
          // tslint:disable-next-line: forin
          for (const i in materials) {
            this.materialesPrestados.push(materials[i]);
          }
          console.log(this.materialesPrestados);
          this.controlClock = true;
        },
        error => {
          console.log(error);
          this.controlClock = false;
        }
      );
  }

  timeout() {
    setTimeout(() => {
      if (this.userColor && !this.controlClock) {
        this.user();
      }

      this.timeout();
    }, 1000);
  }

  confirmar() {
    this.ticket['usuario'] = this.data['usuario'];
    this.ticket['materiales'] = this.materiales;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const useful = Global.dominio + '/prestamo-material';
    this.http
      .post(useful, this.ticket, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
          this.service.presentAlert(
            'Prestamo creado',
            'El prestamo fue creado'
          );

          this.materiales = [];
        },
        error => {
          console.log('ERROR');
          console.log(error);
        }
      );
    console.log(this.ticket);
  }

  /* timeout() {
    setTimeout(() => {
      console.log('Test');

      this.timeout();
    }, 1000 / 60);
  } */
}
