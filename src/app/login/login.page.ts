import { Component, OnInit } from '@angular/core';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  data = {};
  user: any;
  constructor(
    public http: HttpClient,
    public router: Router,
    public service: ParamService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
    if (this.user != null) {
      this.router.navigate(['/home']); // redirigir si ya esta logeado
    }
  }

  login() {
    const useful = Global.dominio + '/login';
    this.http.post(useful, this.data).subscribe(
      info => {
        console.log(info);
        if (info != null) {
          console.log(info);
          sessionStorage.setItem('usuario', JSON.stringify(info));
          this.router.navigateByUrl('/home');
          window.location.reload();
        }
      },
      error => {
        console.log('ERROR');
      }
    );

  }
}
