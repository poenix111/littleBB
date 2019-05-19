import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import { ParamService } from 'src/app/param.service';
import { Global } from 'src/app/global';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  @Input() info: any;
  @Input() mostrar: boolean;
  @Input() libro: boolean;
  libros = [];
  materiales = [];

  dinero = [0, 0, 0, 0, 0];
  constructor(public service: ParamService, public http: HttpClient) {}
  ngOnInit() {
    if (!this.service.backToHome()) {
      console.log(this.mostrar);
    }
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    /* let newLibros = changes.currentValue;
    //this.libros = newLibros;
    console.log('new libros: ' + newLibros); */
    if (this.libro) {
      this.libros = this.info;
      this.service.libros = this.info;
    } else {
      this.materiales = this.info;
    }
  }
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

   returnBook(libro) {
    const useful = Global.dominio + '/return-book';
    libro['folio'] = this.service.folio;
    this.http.post(useful, libro, {headers : this.service.reqHeader, responseType: 'text'}).subscribe(  info => {
      console.log(info);
      this.libros.splice(this.libros.indexOf(libro), 1);
      console.log(this.libros);
      if (info === 'Usuario penalizado') {
         /* this.service.presentAlert('Penalizacion', 'El usuario fue penalizado'); */
      }
    }, error =>{
      console.log(error);
    });

  }


  returnMaterial(material) {
    const useful = Global.dominio + '/return-material';
    material['folio'] = this.service.folio;
    this.http.post(useful, material, {headers : this.service.reqHeader, responseType: 'text'}).subscribe(  info => {
      console.log(info);
      this.materiales.splice(this.libros.indexOf(material), 1);
      console.log(this.materiales);
      if (info === 'Usuario penalizado') {
         /* this.service.presentAlert('Penalizacion', 'El usuario fue penalizado'); */
      }
    }, error =>{
      console.log('ERROR');
    }); 
  }


  cobro(libro, dinero) {
    this.returnBook(libro)
    const useful = Global.dominio + '/cobro-daños';
    libro['folio'] = this.service.folio;
    libro['dinero'] = dinero;
    this.http.post(useful, libro, {headers : this.service.reqHeader, responseType: 'text'}).subscribe(  info => {
      console.log(info);
    }, error =>{
      console.log('ERROR');
    });

    console.log(dinero);
  }
}
