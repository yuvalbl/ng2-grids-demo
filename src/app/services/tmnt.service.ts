import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Character} from "../classes/character";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TMNTService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getCharacters(): Promise<Character[]> {
    return this.http.get('/data/tmnt.json')
      .toPromise()
      .then(response => response.json() as Character[])
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
