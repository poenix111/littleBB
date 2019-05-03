import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.page.html',
  styleUrls: ['./devolucion.page.scss'],
})
export class DevolucionPage implements OnInit {

  constructor(public http: HttpClient, public service: ParamService) { }
  data = {};
  libros = [];
  ngOnInit() {
  }
  showLend() {
    const useful = Global.dominio + '/show-lend';
    this.http.post(useful, this.data, {headers : this.service.reqHeader, responseType: 'text'}).subscribe( info => {
      this.service.libros = JSON.parse(info);
      this.libros  = JSON.parse(info);
    }, error =>{
      console.log('ERROR');
    });

  }

  returnBook(libro) {
    const useful = Global.dominio + '/return-book';
    libro['folio'] = this.data['folio'];
    this.http.post(useful, libro, {headers : this.service.reqHeader, responseType: 'text'}).subscribe( info => {
      console.log(info);

    }, error =>{
      console.log('ERROR');
    });

  }
}
