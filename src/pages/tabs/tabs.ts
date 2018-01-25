import { Component } from '@angular/core';
import { PaisesPage } from '../paises/paises';
import { ContinentesPage } from '../continentes/continentes';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PaisesPage;
  tab3Root = ContinentesPage;

  constructor() {
  }
}