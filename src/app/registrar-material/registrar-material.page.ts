import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
@Component({
  selector: 'app-registrar-material',
  templateUrl: './registrar-material.page.html',
  styleUrls: ['./registrar-material.page.scss'],
})
export class RegistrarMaterialPage implements OnInit {

  tipo = '';
  marca = '';
  descripcion = '';
  numSerie = '';
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  registrarMaterial() {
    // tslint:disable-next-line: max-line-length
    const useful = Global.dominio + '/registrar-material?tipo=' + this.tipo + '&marca=' + this.marca + '&descripcion=' + this.descripcion + '&numSerie=' + this.numSerie;
    this.http.get(useful).subscribe(data =>{
      console.log('nice');
    }, error =>{
      console.log('ERROR');
    });

    console.log(useful);
  }
}
