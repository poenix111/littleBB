import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ParamService } from 'src/app/param.service';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  @Input() info: any;
  libros = [];
  constructor(public service: ParamService) {}
 /*  libro = {
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
 */

  ngOnInit() {
   /*  console.log('here');
    for (let i = 0; i < 10; i++) {
      this.libros.push(this.libro);
    } */
    this.service.backToHome();
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    /* let newLibros = changes.currentValue;
    //this.libros = newLibros;
    console.log('new libros: ' + newLibros); */
    this.libros = this.info;
  
  }
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }
}
