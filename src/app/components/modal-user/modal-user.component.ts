import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalUserPage } from 'src/app/modal-user/modal-user.page';
import { ParamService } from 'src/app/param.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
  constructor(
    public modalController: ModalController,
    public service: ParamService
  ) {}
  async presentModal() {
    if (this.service.hasUser) {
      const modal = await this.modalController.create({
        component: ModalUserPage
      });

      return await modal.present();
    }
  }
  ngOnInit() {}
}
