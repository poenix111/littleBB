import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ParamService } from 'src/app/param.service';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  constructor(public service: ParamService) {}
  @Input() devolucion: boolean;

  date = new Date().toLocaleDateString();
  dateNew = new Date(Date.now() + (1000 * 60 * 60 * 24) * 3).toLocaleDateString();
  libro = {
    'autor': 'l',
    'descripcion': 'a',
    'disponibles': 20,
    'edicion': 1,
    'editorial': 'l',
    'existencia': 20,
    'genero': 'l',
    'id_libro': 6,
    'idioma': 'l',
    'isbn': '12',
    'nombre': 'loco',
    'unicos': 20
  };


  libros =[];
  ngOnInit() {
    console.log('here');
    for (let i = 0; i < 10; i++) {
      this.libros.push(this.libro);
    }
  }

  actualizar(){
    //this.libros = this.service.libros;
  }
  
}
