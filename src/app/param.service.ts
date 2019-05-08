import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  constructor(public alertController: AlertController, public loadingController: LoadingController) { }
  userPrestmamo = {};
  hasUser: boolean;
  prestamo: boolean;
  libro: boolean;
  libros = [];
  materiales = [];
  info: any[];
  user = {};
  folio: number;
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
  async presentLoadingWithOptions(mensaje: string) {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      duration: 5000,
      message: mensaje,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  backToHome(){
    if (sessionStorage.getItem('usuario') === null || JSON.parse(sessionStorage.getItem('usuario'))['tipo'] < 3) {
      window.location.replace('/');
      return true;
    }

    return false;

  }
}
