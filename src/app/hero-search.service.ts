import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';
import { HEROES } from './mock-hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Hero[]> {
    console.log('called term222 = ', term);
    let heroes = HEROES.filter(h => h.name.indexOf(term) >= 0);
    console.log('called term222 = ', heroes);
    return Observable.of<Hero[]>(heroes);
    /*return this.http
      .get(`app/heroes/?name=${term}`)
      .map(response => response.json().data as Hero[]);*/
  }
}
