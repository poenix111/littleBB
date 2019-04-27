import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  info:any[];

  user = {};
  userPrestmamo = {};
  hasUser: boolean;
  prestamo: boolean;
  libro: boolean;
  libros = [];
  constructor() { }
}
