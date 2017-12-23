import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {

  constructor(private http : HttpClient) { }

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';  // URL to web api
  private onePokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonUrlDesc = 'https://pokeapi.co/api/v2/pokemon-species/';

  getAllPokemons() {
    return this.http.get(`${this.pokemonUrl}`).pipe(map((pokemons: any) => pokemons.results))
  }

  getPokemonById(id){
    return this.http.get<Pokemon>(`${this.onePokemonUrl}${id}/`).pipe(map((poke : any) => poke))
  }

  getDescById(id) {
      return this.http.get<any>(`${this.pokemonUrlDesc}${id}`).pipe(
        map(descriptions => descriptions.flavor_text_entries.find(entries => entries.language.name === 'fr').flavor_text)
      );
    }
}
