import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'ns-cocktails-test',
  templateUrl: './cocktails-test.component.html',
  styleUrls: ['./cocktails-test.component.css'],
  moduleId: module.id,
})
export class CocktailsTestComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  }

  getIngredients() {
    this.cocktailService.getIngredients()
      .subscribe(result => console.log(JSON.stringify(result, null, 2)));
  }
  getCocktails() {
    this.cocktailService.getCocktails('Vodka')
      .subscribe(result => console.log(JSON.stringify(result, null, 2)));
  }
  getCocktail() {
    this.cocktailService.getCocktail('17222')
      .subscribe(result => console.log(JSON.stringify(result, null, 2)));
  }

}
