import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
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

  @ViewChild(Content)
  content:Content;

  ngAfterViewInit() {
    this.content.ionScrollEnd.subscribe((data) => {
      this._swapiService.getNextPeople(this.people.next).subscribe((data) => {
        this.people = data;
        this.listPeople = this.listPeople.concat(data.results);
      },
      error => console.log(error));
    });
  }

  initializeItems() {
    this._swapiService.getAllPeople().subscribe((data) => {
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
