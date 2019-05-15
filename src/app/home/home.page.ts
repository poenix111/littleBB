import { Component , OnInit} from '@angular/core';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  constructor(public http: HttpClient, public service: ParamService){}
  isBook: boolean;
  user = {};
  prestadoLibro = [];
  prestadoMaterial = [];
  folios = {};

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(this.user);
    if (this.user !== null) {
       this.searchFolio();
    }

  }


  searchFolio() {
    this.folios = [];
    const useful = Global.dominio + '/folios-activos';
    this.http.post(useful, this.user).subscribe(
      info => {

        this.folios = info;
        this.showInfo();

        console.log(this.folios);
      },  
      error => {
        console.log(error);
      }
    );

  } 
  showLend(isBook, data) {
    if (isBook) {
      const useful = Global.dominio + '/show-lend';
      this.http
        .post(useful, data, {
          headers: this.service.reqHeader,
          responseType: 'text'
        })
        .subscribe(
          info => {
            /* this.service.libros = JSON.parse(info); */
            this.prestadoLibro.push(JSON.parse(info));
            this.service.folio = data['folio'];
          },
          error => {
            console.log('ERROR');
          }
        );
    } else {
      const useful = Global.dominio + '/show-lend-material';
      this.http
        .post(useful,  data, {
          headers: this.service.reqHeader,
          responseType: 'text'
        })
        .subscribe(
          info => {
            /* this.service.libros = JSON.parse(info); */
            this.prestadoMaterial.push(JSON.parse(info));
            this.service.folio = data['folio'];
          },
          error => {
            console.log('ERROR');
          }
        );
    }
  }


  showInfo() {

// tslint:disable-next-line: forin
    for (const f in this.folios) {
      console.log(this.folios[f]);
      if (this.folios[f]['libro'] === 'True') {
        this.showLend(true, this.folios[f]);
      } else {
        this.showLend(false, this.folios[f]);
      }
    }
    console.log(this.prestadoLibro);

    console.log(this.prestadoMaterial);
  }

}
