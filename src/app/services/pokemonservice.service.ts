import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeDetail, Pokelist } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {

  private url : string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(
    private _client : HttpClient
  ) { }

  firstCall(){
    return this._client.get<Pokelist>(this.url)
  }

  getDetail(pokeurl :string) {
    return this._client.get<PokeDetail>(pokeurl)
  }
}
