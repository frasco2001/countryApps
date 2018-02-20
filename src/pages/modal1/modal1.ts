import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'page-modal1',
  templateUrl: 'modal1.html',
})
export class Modal1Page {
  
  countries: any[];
  nombre;
  errorMessage: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public modalCtrl: ModalController, public rest: Rest) {
    this.countries=[];
  }
  ionViewDidLoad() {
    this.getContinent();
    console.log('ionViewDidLoad Modal1Page');
  }
  getContinent() {
    this.nombre=this.navParams.get('continente');
    this.rest.getCountriesByContinents(this.nombre)
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }
  detalle(data){
    let modal = this.modalCtrl.create(ModalPage, data);
    modal.present();
  }
  cerrar() {
    this.viewController.dismiss();
  }
}