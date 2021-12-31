import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CharactersService } from 'app/api/characters.service';
import { Characters } from "app/models/characters";
import { Character } from "app/models/character";

@Injectable({ providedIn: 'root'})

export class ListCharactersService {

  private listCharactersSubject = new BehaviorSubject<Characters[]>([]);
  private detailCharacterSubject = new BehaviorSubject<Character[]>([]);
  private limit = 50;
  private offset = undefined;

  constructor(private charactersService: CharactersService) {}

  get listCharacters$(): Observable<Characters[]> {
    return this.listCharactersSubject.asObservable();
  }
  get detailCharacter$(): Observable<Character[]> {
    return this.detailCharacterSubject.asObservable();
  }

  getListCharacters() {
    let checkList;
    this.listCharacters$.subscribe((list) => {
      checkList = list;
      if (checkList.length === 0) {
        this.charactersService.getCharacters(this.limit, this.offset)
          .subscribe(result => {
            this.listCharactersSubject.next(Object.assign({}, result));
          });
      }
    });
  }

  getCharacterDetail(id: number) {
    // let listArray = new Array<Characters>();
    let checkList;
    let listArray: any[] = [];

    this.detailCharacter$.subscribe(list => {
      checkList = list;
      if (checkList.length === 0) {
        this.charactersService.getCharacterDetail(id)
          .subscribe(character => {
          listArray.push(character);
          listArray.forEach((characterDetails: Character[]) => {
            this.detailCharacterSubject.next(Object.assign({}, characterDetails));
          });
          });
      }
    });
  }

  searchCharaters(term: string): Observable<Characters[]> {

    if (!term.trim()) { return of([]); }

    let check = false;
    let charactersArray: any[] = [];
    let characterArray: any[] = [];
    let filterArray: any[] = [];

    this.listCharacters$.subscribe(characters => {
      characters ? check = true : check = false;
      if (check) {
        charactersArray.push(characters);
        charactersArray.map(character => {
          characterArray.push(character.data?.results);
          const filterValue = term.toLowerCase();
          characterArray.forEach(select => {
            filterArray = select.filter(
              (option: any) => option.name?.toLowerCase().includes(filterValue));
          });
          return filterArray;
        });
      }
    });
    return of(filterArray);
  }

}
