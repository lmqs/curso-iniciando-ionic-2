import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';


@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {
  constructor(private nav: NavController) {}

  openModal(){
    let modal = Modal.create(ModalLoginPage, {
      //action: {'logar'} OU
      action: {
        test: 'olaá',
        value: true
      }
    });

    modal.onDismiss((param) => {
      console.log('Dados usuário', param);
    });
    this.nav.present(modal);
  }
}
