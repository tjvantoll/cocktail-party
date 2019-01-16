import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CocktailOverviewRaw } from '../cocktail.model';

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  moduleId: module.id,
})
export class SearchComponent implements OnInit {
  public ingredients$: Observable<string[]>;
  private ingredients: string[] = [];

  public ingredientIndex;

  public cocktails$: Observable<CocktailOverviewRaw[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.ingredients$ = this.cocktailService.getIngredients()
      .pipe(
        tap(ingredients => this.ingredients = ingredients)
      );
  }

  updateCocktailList() {
    this.ingredientIndex = this.ingredientIndex | 0;
    const ingredient = this.ingredients[this.ingredientIndex];

    this.cocktails$ = this.cocktailService.getCocktails(ingredient);
  }

  onClose() {
    if (!this.ingredientIndex) {
      this.ingredientIndex = 0;
      this.updateCocktailList();
    }
  }

}
