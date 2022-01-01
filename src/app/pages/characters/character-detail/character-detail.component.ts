import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'app/models/character';
import { CharactersService } from 'app/api/characters.service';
import { ListCharactersService } from 'app/api/listCharacters.service';
import { ComicsCollection } from 'app/models/comicsCollection';
import { SeriesCollection } from 'app/models/seriesCollection';
import { EventsCollection } from 'app/models/eventsCollection';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterId: number | null;
  character$!: Observable<Character>;
  character!: Character;

  comics$?: Observable<ComicsCollection[]>;
  series$?: Observable<SeriesCollection[]>;
  events$?: Observable<EventsCollection[]>;

  constructor(private charactersService: CharactersService,
              private listCharactersService: ListCharactersService,
              private route: ActivatedRoute) {
    this.characterId! = +this.route.snapshot.paramMap.get('id')!;
    this.characterId ? this.characterId! = this.characterId : this.characterId! = 0;
  }

  ngOnInit(): void {

    this.goTop();

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

        this.getExtras();
    }
  }

  getCharacter(result: any[]) {
    result.forEach(lista => {
      this.character = lista.data?.results.filter((characterSelected: Character) => {
        return characterSelected.id === this.characterId!;
      });
    });
  }

  getExtras() {
    this.comics$ = this.charactersService.getCharacterComics(this.characterId!);
    this.series$ = this.charactersService.getCharacterSeries(this.characterId!);
    this.events$ = this.charactersService.getCharacterEvents(this.characterId!);
  }

  goTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
