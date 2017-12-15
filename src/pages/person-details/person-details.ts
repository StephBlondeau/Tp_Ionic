import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SWassocService } from '../../services/sw-assocService.service';
import { People } from '../../models/people.model';

@IonicPage()
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})

export class PersonDetailsPage {

  selectedPerson : People;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _SWassocService: SWassocService) {

      this.selectedPerson = this.navParams.data;
      //console.log(this.selectedPerson);
  }

}
