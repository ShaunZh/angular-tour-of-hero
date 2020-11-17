import { MessageService } from "./../message.service";
import { HeroService } from "./../hero.service";
import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
  heroes: Hero[];
  selectHero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.messageService.add("HeroesComponent: onSelect hero id = " + hero.id);
    this.selectHero = hero;
  }
}
