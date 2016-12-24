import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {
  user:any = {};
  constructor(private nav: NavController, public view: ViewController, public params: NavParams) {
    console.log('dados recebidos ', params.get('action'))
    //pegando o parâmetro da página que chama o modal
  }

  logar(){
    this.view.dismiss(this.user);
    //passa para tela que abriu o modal, o obj User
  }

  close(){
    this.view.dismiss();
  }
}
