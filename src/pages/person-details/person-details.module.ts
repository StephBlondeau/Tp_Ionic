import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from "ionic2-rating";
import { PersonDetailsPage } from './person-details';

@NgModule({
  declarations: [
    PersonDetailsPage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(PersonDetailsPage),
  ],
})
export class PersonDetailsPageModule {}
