import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Result, IngredientRaw, CocktailOverviewRaw, CocktailRecipeRaw, CocktailRecipe } from './cocktail.model';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private baseUrl: Readonly<string> = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // get a list of ingredients: https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
  getIngredients(): Observable<string[]> {
    return this.http.get<Result<IngredientRaw>>(`${this.baseUrl}/list.php?i=list`)
      .pipe(
        map(result =>
          result.drinks.map(ingredient => ingredient.strIngredient1)
        )
      );
  }

  // get a list of drinks and a picture for a given ingredient: https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
  getCocktails(ingredient: string): Observable<CocktailOverviewRaw[]> {
    const params = new HttpParams().set('i', ingredient);

    return this.http.get<Result<CocktailOverviewRaw>>(`${this.baseUrl}/filter.php`, { params })
      .pipe(
        map(result =>
          result.drinks
        )
      );
  }

  // get a recipe for a given drink ID: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13940
  getCocktail(id: string): Observable<CocktailRecipe> {
    const params = new HttpParams().set('i', id);

    return this.http.get<Result<CocktailRecipeRaw>>(`${this.baseUrl}/lookup.php`, { params })
      .pipe(
        map(result =>
          new CocktailRecipe(result.drinks[0])
        )
      );
  }
}