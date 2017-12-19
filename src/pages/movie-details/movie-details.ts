import { themoviedbService } from './../../services/themoviedbService.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie.model';
import { MovieCredits } from '../../models/movieCredits.model';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
  selectedMovieCredits: MovieCredits[];

  video_id: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _themoviedbService: themoviedbService,
    public sanitizer: DomSanitizer,
    public youtube: YoutubeVideoPlayer) {
    this.selectedMovie = this.navParams.data;
    console.log(this.selectedMovie);
  }

  ionViewDidLoad() {
    this.getMovieCredits();
    this.getMovieVideos();
  }

  getMovieCredits = () => {
    this._themoviedbService.getMovieCredits(this.selectedMovie.id).subscribe(
      (data: any) => this.selectedMovieCredits = data.cast, // TODO change the way to copy an array
      error => console.log(error)
    );
  }

  getMovieVideos = () => {
    this._themoviedbService.getMovieVideos(this.selectedMovie.id).subscribe(
      (data: any) => {
        console.log(data.results);
        for (let video of data.results) {
          if (video.type == 'Trailer' && video.size >= 720) {
            this.video_id = video.key;
            console.log('Got the key : ', this.video_id);
            break;
          }
        }
      },
      error => console.log(error)
    );
  }

  updateVideoUrl() {
    if (this.video_id) {
      let dangerousVideoUrl = 'https://www.youtube.com/embed/' + this.video_id + '?rel=0&showinfo=0';
      return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }
  }

  watch_on_youtube() {
    if (this.video_id) {
      this.youtube.openVideo(this.video_id);
    }
  }
}
