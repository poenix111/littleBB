import { Component, OnInit } from '@angular/core';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  data = {};
  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit() {}

  login() {
    const useful = Global.dominio + '/login';
    this.http.post(useful, this.data).subscribe(
      info => {
        console.log(info);
        this.router.navigateByUrl('/');

      },
      error => {
        console.log('ERROR');
      }
    );

  }
}
