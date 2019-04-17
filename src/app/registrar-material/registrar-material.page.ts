import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-material',
  templateUrl: './registrar-material.page.html',
  styleUrls: ['./registrar-material.page.scss'],
})
export class RegistrarMaterialPage implements OnInit {

  
  data = {};
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  registrarMaterial() {
    // tslint:disable-next-line: max-line-length
    /* const useful = Global.dominio + '/registrar-material?tipo=' + this.tipo + '&marca=' + this.marca + '&descripcion=' + this.descripcion + '&numSerie=' + this.numSerie;
    this.http.get(useful).subscribe(data =>{
      console.log('nice');
    }, error =>{
      console.log('ERROR');
    });

    console.log(useful); */
    const useful = Global.dominio + '/registrar-material';
    this.http.post(useful, this.data).subscribe(
      info => {
        console.log(useful);
      },
      error => {
        console.log('ERROR');
      }
    );

    this.router.navigateByUrl('mostrar-material');
  }
}
