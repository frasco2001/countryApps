import { Component } from '@angular/core';
import { PaisesPage } from '../paises/paises';
import { ContinentesPage } from '../continentes/continentes';
import { HomePage } from '../home/home';
import { TetrisPage } from '../tetris/tetris';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PaisesPage;
  tab3Root = ContinentesPage;
  tab4Root = TetrisPage;

  constructor() {
  }
}