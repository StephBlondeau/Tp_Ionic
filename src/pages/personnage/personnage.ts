import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PersonDetailsPage } from '../person-details/person-details';
import { SWassocService } from './../../services/sw-assocService.service';
import { People } from '../../models/people.model';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-personnage',
  templateUrl: 'personnage.html',
})
export class PersonnagePage {

  listPeople: People[];
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;


  constructor(
    public navCtrl: NavController,
    public _SWassocService: SWassocService) {

    this.searchControl = new FormControl();
    this.initializeItems();

  }

  ionViewDidLoad() {

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems(search);
    });
  }

  initializeItems() {
    this._SWassocService.getAllPeople().subscribe(
      data => this.listPeople = data,
      error => console.log(error));
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems(searchTerm) {

    if (searchTerm) {
      this.filterCharacters(searchTerm);
    } else {
      this.initializeItems();
    }
  }

  filterCharacters(value) {
    // if the value is an empty string don't filter the items
    if (!value) {
      return;
    }

    this.listPeople = this.listPeople.filter((v) => {
      if (v.name && value) {
        if (v.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(value, this.listPeople.length);

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PersonDetailsPage, item);
  }
}
