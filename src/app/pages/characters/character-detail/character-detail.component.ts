import { Observable } from 'rxjs';
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

  characterId: number | null;
  character$!: Observable<Character>;
  character!: Character;

  constructor(private listCharactersService: ListCharactersService,
              private route: ActivatedRoute) {
    this.characterId! = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {

    this.goTop();

    this.characterId ? this.characterId! = this.characterId : this.characterId! = 0;

    if (this.characterId) {
      let listArray = new Array<any>();
      this.listCharactersService.listCharacters$
        .subscribe(list => {
          if (!list || !Object.keys(list).length) {
            let id = this.characterId!;
            this.listCharactersService.getCharacterDetail(id);
            this.listCharactersService.detailCharacter$
              .subscribe(result => {
                listArray = [result];
                listArray.forEach((characterDetails) => {
                  this.character = characterDetails.data?.results.map((result: Character) => result);
                });
              });
          } else {
            listArray = [list];
            this.getCharacter(listArray);
          }
        });
    }
  }

  getCharacter(result: any[]) {
    result.forEach(lista => {
      this.character = lista.data?.results.filter((characterSelected: Character) => {
        return characterSelected.id === this.characterId!;
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
