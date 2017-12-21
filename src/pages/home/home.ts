import { themoviedbService } from './../../services/themoviedbService.service';
import { Movie } from './../../models/movie.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { GlobalTheme } from '../../services/global-theme.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listOfMovies: Movie[];
  movieDetailsPage: MovieDetailsPage;
  selectedTheme: String;
  themeSwitcherIcon: String = 'assets/imgs/rouge.png';

  constructor(
    public navCtrl: NavController,
    public _themoviedbAPI: themoviedbService,
    public _globalTheme: GlobalTheme) {

    this._globalTheme.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.initializeItems();
  }

  initializeItems() {
    this._themoviedbAPI.getAllMovies().subscribe(
      (data: any) => this.listOfMovies = data.parts,
      error => console.log(error));
  }

  navigateToMovieDetails(movie) {
    this.navCtrl.push('MovieDetailsPage', movie);
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this._globalTheme.setActiveTheme('light-theme');
      this.themeSwitcherIcon = 'assets/imgs/vert.png';
    } else {
      this._globalTheme.setActiveTheme('dark-theme');
      this.themeSwitcherIcon = 'assets/imgs/rouge.png';
    }
  }
}
