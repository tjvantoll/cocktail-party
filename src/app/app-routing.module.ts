import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CocktailsTestComponent } from './cocktails-test/cocktails-test.component';
import { SearchComponent } from './search/search.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  // { path: "", redirectTo: "/recipe/13940", pathMatch: "full" },
  // { path: "", redirectTo: "/cocktails-test", pathMatch: "full" },

  { path: "search", component: SearchComponent },
  { path: "recipe/:id", component: RecipeComponent },

  { path: "cocktails-test", component: CocktailsTestComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }