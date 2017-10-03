import { Component } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
 
  selectedHero: Hero;
  heroes : Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

