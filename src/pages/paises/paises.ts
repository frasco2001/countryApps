import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html'
})
export class PaisesPage {
  
  countries: any;
  errorMessage: string;
  
  constructor(public navCtrl: NavController, public rest: Rest, public modalCtrl: ModalController) {
  }
  ionViewDidLoad() {
    this.getCountries();
  }
  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }
  detalle(data){
    let modal = this.modalCtrl.create(ModalPage, data);
    modal.present();
  }
}