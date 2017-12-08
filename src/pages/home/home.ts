import { themoviedbService } from './../../services/themoviedbService.service';
import { Movie } from './../../models/movie.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listOfMovies: Movie[];

  constructor(
    public navCtrl: NavController,
    public _themoviedbAPI: themoviedbService) {

    this.initializeItems();
  }

  initializeItems() {
    this._themoviedbAPI.getAllMovies().subscribe(
      (data) => this.listOfMovies = data.parts,
      error => console.log(error));
  }
}
