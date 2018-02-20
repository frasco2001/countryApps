import { NgModule, ErrorHandler, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PaisesPage } from '../pages/paises/paises';
import { ContinentesPage } from '../pages/continentes/continentes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';
import { Modal1Page } from '../pages/modal1/modal1';
import { TetrisPage } from '../pages/tetris/tetris';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Rest } from '../providers/rest/rest';
import { HttpModule } from '@angular/http/';

@NgModule({
  declarations: [
    MyApp,
    PaisesPage,
    ContinentesPage,
    HomePage,
    TabsPage,
    ModalPage,
    Modal1Page,
    TetrisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaisesPage,
    ContinentesPage,
    HomePage,
    TabsPage,
    ModalPage,
    Modal1Page,
    TetrisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Rest
  ]
})
export class AppModule {}
