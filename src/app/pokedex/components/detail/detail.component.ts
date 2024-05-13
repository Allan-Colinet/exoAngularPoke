import { Component } from '@angular/core';
import { PokeDetail } from '../../../models/pokemon.model';
import { PokemonserviceService } from '../../../services/pokemonservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
pokeurl! : PokeDetail

constructor(private _service : PokemonserviceService){
  this._service.getDetail(this.pokeurl.url).subscribe({
    next : (data : PokeDetail) => this.pokeurl = data
  })
}
}
