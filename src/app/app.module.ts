import { MovieDetailsPage } from './../pages/movie-details/movie-details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonnagePage } from '../pages/personnage/personnage';
import { AssociationPage } from '../pages/association/association';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';

// Services
import { themoviedbService } from '../services/themoviedbService.service';
import { HttpModule } from '@angular/http';

import { MovieDetailsPageModule } from '../pages/movie-details/movie-details.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonnagePage,
    SplashPage,
    AssociationPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MovieDetailsPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonnagePage,
    SplashPage,
    MovieDetailsPage,
    AssociationPage
  ],
  providers: [
    themoviedbService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
