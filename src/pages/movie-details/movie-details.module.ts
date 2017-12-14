import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailsPage } from './movie-details';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    MovieDetailsPage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(MovieDetailsPage),
  ],
})
export class MovieDetailsPageModule { }
