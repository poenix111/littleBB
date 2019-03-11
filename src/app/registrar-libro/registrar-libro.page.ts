import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.page.html',
  styleUrls: ['./registrar-libro.page.scss'],
})
export class RegistrarLibroPage implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    
  }

}
