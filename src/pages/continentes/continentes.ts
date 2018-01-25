import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import { ModalController } from 'ionic-angular';
import { Modal1Page } from '../modal1/modal1';

@Component({
  selector: 'page-continentes',
  templateUrl: 'continentes.html'
})
export class ContinentesPage {

  constructor(public navCtrl: NavController, public rest: Rest, public modal1Ctrl: ModalController  ) {
  }
  ionViewDidLoad() {
  }

  detalle(continente: string){
    let modal = this.modal1Ctrl.create(Modal1Page, {continente: continente});
    modal.present();
  }
}