import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie.model';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedMovie = this.navParams.data;
    console.log(this.selectedMovie);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
