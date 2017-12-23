import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {


  pokemons : any[];


  constructor(private pokemonService : PokemonService, private utilService : UtilService) { }

  ngOnInit() {
    this.getPokemons();
  }

  public getPokemons(){
      this.pokemonService.getAllPokemons().subscribe(pokemons => this.pokemons = pokemons);
    }
}
