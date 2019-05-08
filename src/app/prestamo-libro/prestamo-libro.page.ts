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

  controlClock = false;



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
  contLibros: number;
  ngOnInit() {
    if (!this.service.backToHome()) {
      this.service.libro = true;
      this.extension = false;
      this.contLibros = 0;
      this.timeout();
    }
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  user() {
    this.librosPrestamos = [];
    this.libros = [];
    this.contLibros = 0;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    });

    this.info(reqHeader);
    this.obtenerLibros(reqHeader);
    this.searchContBooks(reqHeader)
 
  }


  color() {
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
    if (this.librosPrestamos.includes(this.data['isbn'])) {
      alert('Tiene ese libro en posesion');
      return;
    }
    if (this.contLibros === 5) {
      alert('Ya no puede sacar libros por que tiene 5 en posesion');
      return;
    }

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
              this.contLibros++;
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
          this.controlClock = true;

        },
        error => {
          console.log(error);
          this.controlClock = false;

        }
      );
  }

  searchContBooks(reqHeader: HttpHeaders) {
    const useful = Global.dominio + '/cont-books';
    this.http
      .post(useful, this.data, {
        headers: reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          this.contLibros = Number(info);
          console.log('contLibros ' + info);
          this.controlClock = true;

        },
        error => {
          console.log(error);
          this.controlClock = false;

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
          this.service.presentAlert(
            'Prestamo creado',
            'El prestamo fue creado'
          );

          this.libros = [];
        },
        error => {
          console.log('ERROR');
          console.log(error);
        }
      );
    console.log(this.ticket);
  }






  timeout() {
    setTimeout(() => {
      console.log('Test');
      if (this.userColor && !this.controlClock) {
        this.user();
      }

      this.timeout();
    }, 1000);
  }
}
  