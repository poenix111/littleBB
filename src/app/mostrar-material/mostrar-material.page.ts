import { Component, OnInit } from '@angular/core';
import {Global} from '../global';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-mostrar-material',
  templateUrl: './mostrar-material.page.html',
  styleUrls: ['./mostrar-material.page.scss'],
})
export class MostrarMaterialPage implements OnInit {
  buscar = '';
  materiales = [];
  constructor(public http: HttpClient, public router:Router, public service:ParamService) { }

  ngOnInit() {
  }

  mostrar() {
    if (this.buscar === '*') {
      const useful = Global.dominio + '/recuperar-material/';
      this.http.get(useful).subscribe(data => {

// tslint:disable-next-line: forin
        for (const m in data) {
          this.materiales.push(data[m]);
        }

      }, error => {

      });

    }
  }

  sendInfo(material){
    this.router.navigateByUrl('/editar-material');
    this.service.info = material;
  }

}
