import { Component, OnInit } from '@angular/core';
import {Global} from '../global';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mostrar-material',
  templateUrl: './mostrar-material.page.html',
  styleUrls: ['./mostrar-material.page.scss'],
})
export class MostrarMaterialPage implements OnInit {
  buscar = '';
  materiales = [];
  constructor(public http: HttpClient) { }

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

}
