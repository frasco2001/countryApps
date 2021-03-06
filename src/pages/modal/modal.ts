import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  name;
  nameES;
  population;
  continente;
  borders: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public rest: Rest) {
    this.borders = [];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  ionViewWillEnter() {
    this.population = this.navParams.get('population').toLocaleString();
    this.name = this.navParams.get('name');
    this.nameES = this.navParams.get('translations').es;
    this.continente = this.navParams.get('region');
    for (let i = 0; i < this.navParams.get('borders').length; i++) {
      this.rest.getCountriesByShortName(this.navParams.get('borders')[i]).then((data: Response) => {
        let aux = data.json()
        this.borders.push(aux);
      }, (error) => {
        console.log(error);
      })
    };
  }
  cerrar() {
    this.viewController.dismiss();
  }
}