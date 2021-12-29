import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from 'app/api/characters.service';
import { character } from 'app/models/character';
import { characters } from 'app/models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  characters$!: Observable<characters>;
  // characters$!: characters;
  character!: character;

  constructor( private charactersService: CharactersService ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    let limit = 10;
    this.characters$ = this.charactersService.getCharacters(limit);
    this.characters$.subscribe(
      result => {
        console.log(result.data?.results[0]['name'])
      }
    )

  }

  getCharacterDetail(id: number) {
    this.characters$ = this.charactersService.getCharacterDetail(id);
    this.characters$.subscribe(
      result => {
        console.log(result.data?.results[0]['name'])
      }
    )

  }



}
