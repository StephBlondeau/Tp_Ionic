import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { MovieCredits } from '../models/movieCredits.model';

@Injectable()
export class themoviedbService {

    protected headers: Headers;
    protected actionUrl: string;

    readonly API_KEY = '43c04d3df7dd76f72027cea01f9aed45';

    // IDs
    readonly STAR_WARS_COLLECTION_ID = '10'

    // API URI
    readonly API_VERSION = '3';
    readonly COLLECTION_RESSOURCE: string = 'collection/';
    readonly MOVIE_RESSOURCE: string = 'movie/';

    constructor(private _http: Http) {
        this.actionUrl = `https://api.themoviedb.org/${this.API_VERSION}/`;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    /**
     * Get all the star wars movie by id collection
     * @return promise
     */
    public getAllMovies = (): Observable<Movie> => {
        let callUrl = `${this.actionUrl}${this.COLLECTION_RESSOURCE}${this.STAR_WARS_COLLECTION_ID}?api_key=${this.API_KEY}&language=en-EN`;

        return this._http.get(callUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public getMovieCredits = (movieID: number): Observable<MovieCredits> => {
        let callUrl = `${this.actionUrl}${this.MOVIE_RESSOURCE}${movieID}/credits?api_key=${this.API_KEY}`;

        return this._http.get(callUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    // Function to throw errors
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}