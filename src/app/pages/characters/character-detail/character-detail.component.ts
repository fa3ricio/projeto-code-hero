import { Observable } from 'rxjs';
import { CharactersService } from 'app/api/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'app/models/character';
import { ListCharactersService } from 'app/api/listCharacters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterId: number | string | null;
  character$!: Observable<Character>;
  character!: Character;
  limit = 50;

  constructor(private listCharactersService: ListCharactersService,
              private route: ActivatedRoute) {
    this.characterId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    console.log(this.character);

    this.goTop();

    this.characterId ? this.characterId = +this.characterId : this.characterId = 0;

    if (this.characterId) {

      let listArray = new Array<any>();

      if (!this.character) {

        this.listCharactersService.getListCharacters(this.limit);

        this.listCharactersService.listCharacters$
          .subscribe(list => {
            listArray = [list];
            this.getCharacterDetail(listArray);
          });

      }

    }
  }

  getCharacterDetail(result: any[]) {
    result.forEach(lista => {
      this.character = lista.data?.results.filter((characterSelected: Character) => {
        return characterSelected.id == this.characterId;
      });
    });
  }

  goTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
