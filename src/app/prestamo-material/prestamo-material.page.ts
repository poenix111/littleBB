import { Component, OnInit, } from '@angular/core';
/* import { ParamService } from '../param.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global'; */

@Component({
  selector: 'app-prestamo-material',
  templateUrl: './prestamo-material.page.html',
  styleUrls: ['./prestamo-material.page.scss'],
})
export class PrestamoMaterialPage implements OnInit {
  data = {};

  materiales = [];
  constructor() { }

  ngOnInit() {
    
  }

}
