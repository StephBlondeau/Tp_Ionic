import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { People } from '../models/people.model';


@Injectable()
export class SWassocService {

    protected headers: Headers;
    protected actionUrl: string;


    constructor(private _http: Http) {
        this.actionUrl =
            `https://sw-assoc-api.herokuapp.com/api/v1/characters`;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    /**
     * Get all peoples the star wars movie by id collection
     * @return promise
     */
    public getAllPeople = (): Observable<People[]> => {
        let callUrl = `${this.actionUrl}`;

        return this._http.get(callUrl)
            .map((response: Response) => response.json() as People[])
            .catch(this.handleError);
    }

    // Function to throw errors
    private handleError(error: Response) {
        return Observable.throw(error);
    }
}
