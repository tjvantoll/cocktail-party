import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropDownModule } from 'nativescript-drop-down/angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { CocktailsTestComponent } from './cocktails-test/cocktails-test.component';
import { SearchComponent } from './search/search.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    DropDownModule,
  ],
  declarations: [
    AppComponent,
    CocktailsTestComponent,
    SearchComponent,
    RecipeComponent,
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
