import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiService } from './../../services/swapiService.service';
import { PeopleDetail } from '../../models/people-detail.model';

@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})

export class PersonDetailsPage {

  selectedPerson : PeopleDetail;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _swapiService: SwapiService) {

      this.selectedPerson = this.navParams.data;
      console.log(this.selectedPerson);
  }

  ionViewDidLoad() {
    this.getPersonDetails();
  }

  getPersonDetails = () => {
    this._swapiService.getPersonDetails(this.selectedPerson.id).subscribe(
      (data: any) => this.selectedPerson = data.cast,
      error => console.log(error)
    );
  }
}
