import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  name: string = "charizard"
  attributesTypes: string[] = ['FIRE', 'ROCK']
pokemon: any;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe(
      {
        next: (res: any) => console.log(res),

      }
    )
  }

}
