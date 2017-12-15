import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PersonDetailsPage } from '../person-details/person-details';
import { SWassocService } from './../../services/sw-assocService.service';
import { People } from '../../models/people.model';

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

  listPeople: People[];


  constructor(
    public navCtrl: NavController,
    public _SWassocService: SWassocService) {

    this.initializeItems();

  }

  initializeItems() {
    this._SWassocService.getAllPeople().subscribe((data) => {
        this.listPeople = data;
      },
      error => console.log(error));
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PersonDetailsPage, item);
  }
}
