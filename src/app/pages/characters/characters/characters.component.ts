import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCharactersService } from 'app/api/listCharacters.service';
import { Characters } from 'app/models/characters';
import { Character } from 'app/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  totalCharacters!: Characters[];
  // character!: Character;

  constructor(private listCharactersService: ListCharactersService ) {}

  ngOnInit(): void {
    // this.getCharacters();

    let limit = 10;
    let offset = undefined;

    if(!this.totalCharacters || !this.totalCharacters.length) {
      this.listCharactersService.getListCharacters(limit, offset);
      this.listCharactersService.listCharacters$
        .subscribe(list => {
          this.totalCharacters = list
          console.log('Lista Carregada... ', this.totalCharacters);
        });
    }


  }

  getCharacters() {}

  /*
  getCharacterDetail(id: number) {
    this.characters$ = this.charactersService.getCharacterDetail(id);
    this.characters$.subscribe(
      result => {
        console.log(result.data?.results[0]['name'])
      }
    )

  }
  */



}
