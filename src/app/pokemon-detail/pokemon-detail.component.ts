import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../resources/pokemon';
import { PokemonService } from '../pokemon.service';
import { UtilService } from '../util.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  poke : Pokemon;

constructor(private pokemonService : PokemonService,private route : ActivatedRoute,private utilService : UtilService,private location: Location) { }

  ngOnInit() {
    this.getPokemonById(+this.route.snapshot.paramMap.get('id'));
    this.getDesc(+this.route.snapshot.paramMap.get('id'));
  }

  getPokemonById(id){
    this.pokemonService.getPokemonById(id).subscribe(poke => {
      this.poke = poke;
    });

  }

  goBack(): void {
    this.location.back();
  }

  getDesc(id): void {
      this.pokemonService.getDescById(id).subscribe(desc => {
        console.log(desc);
        this.poke.desc = desc;
      });
  }

}
