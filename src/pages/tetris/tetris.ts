import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';

@Component({
  selector: 'page-tetris',
  templateUrl: 'tetris.html',
})
export class TetrisPage {

  jugadores: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: Rest, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.getJugadores();
  }
  getJugadores() {
    this.rest.getJugadores()
       .subscribe(
         jugadores => this.jugadores = jugadores,
         error =>  this.errorMessage = <any>error);
  }
}