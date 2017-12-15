import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PersonDetailsPage } from '../person-details/person-details';
import { SwapiService } from './../../services/swapiService.service';
import { People } from '../../models/people.model';
import { PeopleDetail } from '../../models/people-detail.model';

/**
 * Generated class for the PersonnagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personnage',
  templateUrl: 'personnage.html',
})
export class PersonnagePage {

  people: People;
  listPeople: PeopleDetail[]


  constructor(
    public navCtrl: NavController,
    public _swapiService: SwapiService) {

    this.initializeItems();
  }


  initializeItems() {
    this._swapiService.getAllPeople().subscribe(
      (data) => {
        this.people = data;
        this.listPeople = data.results;
      },
      error => console.log(error));
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PersonDetailsPage, item);
  }
}