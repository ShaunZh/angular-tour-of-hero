import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[]
  selectHero: Hero

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes():void {
    this.heroes = this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectHero =  hero
  }

}
