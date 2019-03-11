import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.page.html',
  styleUrls: ['./registrar-libro.page.scss'],
})
export class RegistrarLibroPage implements OnInit {

  nombreLibro = '';
  nombreAutor = '';
  genero = '';
  edicion = '';
  editorial = '';
  idioma = '';
  isbn = '';
  descripcion = '';

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }
  registrarLibro() {
// tslint:disable-next-line: max-line-length
    const useful = Global.dominio + '/registrar-libro?nombre=' + this.nombreLibro + '&autor=' + this.nombreAutor + '&genero=' + this.genero + '&edicion=' + this.edicion + '&editorial=' + this.editorial + '&idioma=' + this.idioma + '&isbn=' + this.isbn + '&descripcion=' + this.descripcion;
    this.http.get(useful).subscribe(data => {
      console.log('NICE');
    }, error => {
      console.log('ERROR');
    });
    console.log(useful);
  }
}
