import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'detail/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
