import { Component, OnInit } from '@angular/core';
import { ParamService } from '../param.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';
@Component({
  selector: 'app-prestamo-libro',
  templateUrl: './prestamo-libro.page.html',
  styleUrls: ['./prestamo-libro.page.scss']
})
export class PrestamoLibroPage implements OnInit {
  userColor = false;
  bookColor = false;
  contBook: any;
  penalizaciones: any;
  ticket = {};
  extension: boolean;
  libros = [];
  date = new Date()
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
  dateNew = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
  dateWithExtension = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

  constructor(public service: ParamService, public http: HttpClient) {}
  data = {};
  usuario = {};

  librosPrestamos = [];

  ngOnInit() {
    if (!this.service.backToHome()) {
      this.service.libro = true;
      this.extension = false;
    }
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  user() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const useful = Global.dominio + '/exists';
    this.http
      .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
      .subscribe(
        info => {
          /* console.log(info);
          console.log(this.penalizaciones); */
          if (info === 'True') {
            this.userColor = true;
            this.info(reqHeader);
            this.obtenerLibros(reqHeader);
            this.service.hasUser = true;
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

  libro() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const useful = Global.dominio + '/book';
    this.http
      .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
      .subscribe(
        info => {
          if (info === 'False') {
            this.bookColor = false;
          } else {
            this.bookColor = true;
          }
        },
        error => {
          console.log('ERROR');
        }
      );
  }
  /* trackByFn(index, item) {
    return index; // or item.id
  } */

  pushBook() {
    if (!this.librosPrestamos.includes(this.data['isbn'])) {
      if (this.bookColor && this.penalizaciones < 3) {
        const reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'No-Auth': 'True'
        });
        const useful = Global.dominio + '/book-exists';
        this.http
          .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
          .subscribe(
            info => {
              if (info === 'False') {
              } else {
                this.librosPrestamos.push(this.data['isbn']);
                info = JSON.parse(info);
                info['extension'] = this.extension;
                info['date'] = this.date;

                if (this.extension) {
                  info['dateEntrega'] = this.dateWithExtension;
                } else {
                  info['dateEntrega'] = this.dateNew;
                }
                /* this.service.libros.push(info); */
                this.libros.push(info);
                this.extension = false;
                this.data['isbn'] = '';
                this.bookColor = false;
              }
            },
            error => {
              console.log('ERROR');
            }
          );
      }
    } else {
      alert('El libro ya se encuentra en posesion');
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
          }
        },
        error => {
          console.log('ERROR');
          console.log(error);
        }
      );
  }

  obtenerLibros(reqHeader: HttpHeaders) {
    const useful = Global.dominio + '/libros-en-posesion';
    this.http
      .post(useful, this.data, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          const books = JSON.parse(info);
// tslint:disable-next-line: forin
          for (const i in books) {
            this.librosPrestamos.push(books[i]);
          }
          console.log(this.librosPrestamos);
        },
        error => {
          console.log(error);
        }
      );
  }
  confirmar() {
    this.ticket['usuario'] = this.data['usuario'];
    this.ticket['libros'] = this.service.libros;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });
    const useful = Global.dominio + '/prestamo-libro';
    this.http
      .post(useful, this.ticket, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
        },
        error => {
          console.log('ERROR');
          console.log(error);
        }
      );
    console.log(this.ticket);
  }
}
