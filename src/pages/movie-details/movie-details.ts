import { themoviedbService } from './../../services/themoviedbService.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie.model';
import { MovieCredits } from '../../models/movieCredits.model';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  selectedMovie: Movie;
  selectedMovieCredits: MovieCredits;

  // Slider options
  sliderOptions = {
    pager: true,
    effect: "fade",
    slidesPerView: 3,
    spaceBetween: 10
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _themoviedbService: themoviedbService) {
    this.selectedMovie = this.navParams.data;
    console.log(this.selectedMovie);
  }

  ionViewDidLoad() {
    this.getMovieCredits();
  }

  getMovieCredits = () => {
    this._themoviedbService.getMovieCredits(this.selectedMovie.id).subscribe(
      (data: any) => this.selectedMovieCredits = data.cast,
      error => console.log(error)
    );
  }
}
