import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { swapiService } from './../../services/swapiService.service';
import { Personnage } from '../../models/personnage.model';

@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})

export class PersonDetailsPage {

  selectedPerson : Personnage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _swapiService: swapiService) {

      this.selectedPerson = this.navParams.data;
      console.log(this.selectedPerson);
  }

  ionViewDidLoad() {
    this.getPersonDetails();
  }

  getPersonDetails = () => {
    this.swapiService.getPersonDetails(this.selectedPerson.id).subscribe(
      (data: any) => this.selectedPerson = data.cast,
      error => console.log(error)
    );
  }
}
