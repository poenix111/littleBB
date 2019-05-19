import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParamService } from '../param.service';
import { Global } from '../global';

@Component({
  selector: 'app-mostrar-pagos',
  templateUrl: './mostrar-pagos.page.html',
  styleUrls: ['./mostrar-pagos.page.scss'],
})
export class MostrarPagosPage implements OnInit {

  constructor(public http: HttpClient, public service: ParamService) { }
  pagos = [];

  ngOnInit() {

    if (!this.service.backToHomeAdmin()) {
      this.showPayments();

    }
  }


  showPayments() {
    const useful = Global.dominio + '/mostrar-dinero';
    this.http
      .get(useful, {
        headers: this.service.reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
          this.pagos = JSON.parse(info);
        },
        error => {
          console.log(error);
        }
      );
  }
}
