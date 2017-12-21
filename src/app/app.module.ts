import { SplashPageModule } from './../pages/splash/splash.module';
import { AssociationPageModule } from './../pages/association/association.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonnagePage } from '../pages/personnage/personnage';
import { AssociationPage } from '../pages/association/association';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { themoviedbService } from '../services/themoviedbService.service';
import { SWassocService } from '../services/sw-assocService.service';
import { HttpModule } from '@angular/http';

import { MovieDetailsPageModule } from '../pages/movie-details/movie-details.module';

import { Ionic2RatingModule } from "ionic2-rating";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { EmailComposer } from '@ionic-native/email-composer';
import { PersonnagePageModule } from '../pages/personnage/personnage.module';
import { PersonDetailsPageModule } from '../pages/person-details/person-details.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonnagePage,
    PersonDetailsPage,
    SplashPage,
    AssociationPage,
    ContactPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    Ionic2RatingModule,
    MovieDetailsPageModule,
    AssociationPageModule,
    PersonDetailsPageModule,
    PersonnagePageModule,
    SplashPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonnagePage,
    PersonDetailsPage,
    SplashPage,
    MovieDetailsPage,
    AssociationPage,
    ContactPage
  ],
  providers: [
    themoviedbService,
    SWassocService,
    StatusBar,
    SplashScreen,
    EmailComposer,
    YoutubeVideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
