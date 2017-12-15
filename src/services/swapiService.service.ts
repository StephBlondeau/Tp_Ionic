import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { People } from '../models/people.model';
import { Homeworld } from '../models/homeworld.model';


@Injectable()
export class SwapiService {

    protected headers: Headers;
    protected actionUrl: string;

    readonly PEOPLE_RESSOURCE: string = 'people/';


    constructor(private _http: Http) {
        this.actionUrl =
            `https://swapi.co/api/`;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    /**
     * Get all peoples the star wars movie by id collection
     * @return promise
     */
    public getAllPeople = (): Observable<People> => {
        let callUrl = `${this.actionUrl}${this.PEOPLE_RESSOURCE}`;

        return this._http.get(callUrl)
            .map((response: Response) => response.json() as People)
            .catch(this.handleError);
    }

    /**
     * Get next page of People
     * @return promise
     */
    public getNextPeople = (url: string): Observable<People> => {
        let callUrl = `url`;

        return this._http.get(callUrl)
            .map((response: Response) => response.json() as People)
            .catch(this.handleError);
    }

    /**
     * Get HomeWorld details by url
     * @return promise
     */
     public getHomeWorld = (homeURL: string): Observable<Homeworld> => {
      //let callUrl = `${homeURL}`;
      return this._http.get(homeURL)
          .map((response: Response) => response.json() as Homeworld)
          .catch(this.handleError);
    }

    // Function to throw errors
    private handleError(error: Response) {
        return Observable.throw(error);
    }
}
