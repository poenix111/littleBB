import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Global} from '../global';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';
@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.page.html',
  styleUrls: ['./mostrar-libros.page.scss'],
})
export class MostrarLibrosPage implements OnInit {
  buscar = '';
  libros = [];
  constructor(public http:HttpClient, public router:Router, public service:ParamService) { }
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

  mostrar(){
    this.libros = [];
    if(this.buscar === '*' || this.buscar === ''){
      const useful = Global.dominio + '/recuperar-libros/';
      this.http.get(useful).subscribe(data =>{
// tslint:disable-next-line: forin
        for(let l in data){
          this.libros.push(data[l]);
        }
        console.log(this.libros);
      }, error =>{

      });


    } else{
      console.log('building');
    }

  }
  sendInfo(l){
    this.router.navigateByUrl('/editar-libro');
    this.service.info = l;
  }


  borrar(book) {
    const useful = Global.dominio + '/delete-book';
    this.http
      .post(useful, JSON.stringify(book), {
        headers: this.service.reqHeader,
        responseType: 'text'
      })
      .subscribe(
        info => {
          console.log(info);
          if (info === 'Error') {
            this.service.presentAlert(
              'Error al borrar el libro',
              'El libro esta prestado, por lo tanto no se puede borrar'
            );
          } else {
            this.libros.splice(this.libros.indexOf(book), 1);

          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
