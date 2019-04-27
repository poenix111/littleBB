import { Component, OnInit } from '@angular/core';
import { ParamService } from 'src/app/param.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.page.html',
  styleUrls: ['./modal-user.page.scss'],
})
export class ModalUserPage implements OnInit {

  constructor(public service: ParamService) { }
  
  ngOnInit() {
    
  }

}
