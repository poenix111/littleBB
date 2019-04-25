import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  info:any[];

  user = {};

  libros = [];
  constructor() { }
}
