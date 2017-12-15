import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiService } from './../../services/swapiService.service';
import { PeopleDetail } from '../../models/people-detail.model';
import { Homeworld } from '../../models/homeworld.model';

@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})

export class PersonDetailsPage {

  selectedPerson : PeopleDetail;
  selectedHomeWorld : Homeworld;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _swapiService: SwapiService) {

      this.selectedPerson = this.navParams.data;
      console.log(this.selectedPerson);
  }

  ionViewDidLoad() {
    this.getHomeWorldDetails();
  }

  getHomeWorldDetails = () => {
    console.log('Fonction getHomeWorldDetails');
    this._swapiService.getHomeWorld(this.selectedPerson.homeworld).subscribe(
      (data: any) => {
        console.log(data);
        this.selectedHomeWorld = data;
        //console.log(this.selectedHomeWorld);
      },
      error => console.log(error)
    );
  }

}
