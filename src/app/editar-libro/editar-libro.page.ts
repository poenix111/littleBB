import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';
@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.page.html',
  styleUrls: ['./editar-libro.page.scss'],
})
export class EditarLibroPage implements OnInit {

  constructor(public http: HttpClient, public router: Router, public service: ParamService) { }
  data = {};
  libro = {};
  ngOnInit() {
  }
  ionViewDidEnter() {
    if (!this.service.backToHome()) {
      console.log(this.libro)
      this.libro = this.service.info;
      console.log(this.libro);
      this.data = this.libro;
      this.service.backToHome();
    }
  }
  actualizar() {
    const useful = Global.dominio + '/editar-libro';
    this.http.post(useful, this.data, {headers : this.service.reqHeader, responseType: 'text'}).subscribe(info => {
      console.log(useful);
    }, error => {
      console.log('Error');
    });
    this.router.navigateByUrl('/mostrar-libros');
  }
}
