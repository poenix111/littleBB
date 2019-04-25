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
  constructor(public http: HttpClient, public router: Router, public service: ParamService) {}

  ngOnInit() {}

  login() {
    const useful = Global.dominio + '/login';
    this.http.post(useful, this.data).subscribe(
      info => {
        this.router.navigateByUrl('/');
        this.service.user = info;
        console.log(this.service.user);

      },
      error => {
        console.log('ERROR');
      }
    );

  }
}
