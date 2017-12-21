import { GlobalTheme } from './../services/global-theme.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PersonnagePage } from '../pages/personnage/personnage';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SplashPage } from '../pages/splash/splash';
import { AssociationPage } from '../pages/association/association';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  selectedTheme: String;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    public _globalTheme: GlobalTheme) {

    this._globalTheme.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Movies', component: HomePage, icon: "md-videocam" },
      { title: 'Characters', component: PersonnagePage, icon: "md-people" },
      { title: 'Association', component: AssociationPage, icon: "clipboard" },
    ];

  }

  initializeApp() {
    // Initialisation du spla
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      // //this.statusBar.styleDefault();
      // let splash = this.modalCtrl.create(SplashPage);
      // splash.present();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
