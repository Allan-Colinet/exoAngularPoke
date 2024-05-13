import { Component } from '@angular/core';
import { Pokelist, Pokemon } from '../../../models/pokemon.model';
import { PokemonserviceService } from '../../../services/pokemonservice.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {

  pokedex! : Pokelist

  constructor(private _service : PokemonserviceService){
    this._service.firstCall().subscribe({
      next : (data : Pokelist) => this.pokedex = data
    })
  }
  getDetail(pokeurl :string) {
    return this._service.getDetail(pokeurl)
  }
}
