import { Injectable } from '@angular/core';

import { HEROES } from './mock-hero';
import { Hero } from './hero';

@Injectable ()
export class HeroService  {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  } // stub

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  } // stub
}
