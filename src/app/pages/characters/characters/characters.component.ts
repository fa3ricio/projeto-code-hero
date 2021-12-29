import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from 'app/api/characters.service';
import { character } from 'app/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  characters$!: Observable<character[]>;

  constructor( private charactersService: CharactersService ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters$ = this.charactersService.getCharacters(5);
    this.characters$.forEach(characters => {
      console.log(characters);
    })
  }

}
