import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  constructor(public alertController: AlertController) { }
  userPrestmamo = {};
  hasUser: boolean;
  prestamo: boolean;
  libro: boolean;
  libros = [];
  info:any[];
  user = {};
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'No-Auth': 'True'
  });

  async presentAlert(subtitle: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: subtitle,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
