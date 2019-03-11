import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Global} from '../global';
@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.page.html',
  styleUrls: ['./mostrar-libros.page.scss'],
})
export class MostrarLibrosPage implements OnInit {
  buscar = '';
  libros = [];
  constructor(public http:HttpClient) { }

  ngOnInit() {

  }

  mostrar(){

    if(this.buscar === '*'){
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
}
