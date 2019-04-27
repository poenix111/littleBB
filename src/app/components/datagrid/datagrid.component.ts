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
   /*  console.log('here');
    for (let i = 0; i < 10; i++) {
      this.libros.push(this.libro);
    } */


  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    this.libros = this.service.libros;
  }
  
  actualizar(){
    // this.libros = this.service.libros;
  }
  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }
}
