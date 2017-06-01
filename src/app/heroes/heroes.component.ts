import {Component, OnInit} from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private heroService: HeroService) {}
}
