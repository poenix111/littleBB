import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ParamService } from '../param.service';
import { Global } from '../global';
@Component({
  selector: 'app-editar-material',
  templateUrl: './editar-material.page.html',
  styleUrls: ['./editar-material.page.scss'],
})
export class EditarMaterialPage implements OnInit {

  data = {}
  material = {}
  tipo:string;
  constructor(public router:Router, public http:HttpClient, public service:ParamService) { 
    this.material = this.service.info;
    this.data = this.material;
    if(this.material['tipo'] === 1){
      this.tipo = 'Laptop';
    }
    else if(this.material['tipo'] === 2){
      this.tipo = 'Bocina';
    }
    else if(this.material['tipo'] === 3){
      this.tipo = 'Proyector';
    }
    

  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.service.backToHome();
  }

  actualizar(){
    const useful = Global.dominio + '/editar-material';

    this.http.post(useful, this.data, {headers : this.service.reqHeader, responseType: 'text'}).subscribe( info =>{
      console.log(useful);
    }, error =>{
      console.log('ERROR');
    });

    this.router.navigateByUrl('/mostrar-material');
  }

}
