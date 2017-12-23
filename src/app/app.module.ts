import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {PokemonsModule} from './pokemons/pokemons.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    MatChipsModule,
    HttpClientModule,
    MatGridListModule,
    CoreModule,
    MatCardModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
