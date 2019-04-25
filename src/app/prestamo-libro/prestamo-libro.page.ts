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
  libros = [];

  constructor(public service: ParamService, public http: HttpClient) {}
  data = {};
  ngOnInit() {}
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
          console.log(info);

          if (info === 'True') {
            this.userColor = true;
          } else {
            this.userColor = false;
          }
        },
        error => {
          console.log('ERROR');
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
          console.log(info);
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
    if (this.bookColor) {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'No-Auth': 'True'
      });
      const useful = Global.dominio + '/book-exists';
      this.http
        .post(useful, this.data, { headers: reqHeader, responseType: 'text' })
        .subscribe(
          info => {
            console.log(info);
            if (info === 'False') {
              console.log('er');
            } else {
              this.service.libros.push(JSON.parse(info));
            }
          },
          error => {
            console.log('ERROR');
          }
        );
    }
  }
}
