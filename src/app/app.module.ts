import { MovieDetailsPage } from './../pages/movie-details/movie-details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonnagePage } from '../pages/personnage/personnage';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';

// Services
import { themoviedbService } from '../services/themoviedbService.service';
import { SwapiService } from '../services/swapiService.service';
import { HttpModule } from '@angular/http';

import { MovieDetailsPageModule } from '../pages/movie-details/movie-details.module';

import { Ionic2RatingModule } from "ionic2-rating";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PersonDetailsPage } from '../pages/person-details/person-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonnagePage,
    ListPage,
    PersonDetailsPage,
    SplashPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    Ionic2RatingModule,
    MovieDetailsPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonnagePage,
    ListPage,
    PersonDetailsPage,
    SplashPage,
    MovieDetailsPage
  ],
  providers: [
    themoviedbService,
    SwapiService,
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
