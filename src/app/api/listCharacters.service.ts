import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CharactersService } from 'app/api/characters.service';
import { Characters } from "app/models/characters";
import { Character } from "app/models/character";

@Injectable()

export class ListCharactersService {

  private listCharactersSubject = new BehaviorSubject<Characters[]>([]);

  constructor(private charactersService: CharactersService) { }

  get listCharacters$(): Observable<Characters[]> {
    return this.listCharactersSubject.asObservable();
  }

  getListCharacters(limit?: number, offset?: number) {

    let checkList;

    this.listCharacters$.subscribe((list) => {
      checkList = list;
      if (checkList.length === 0) {
        this.charactersService.getCharacters(limit, offset)
          .subscribe((list) => {
            this.listCharactersSubject.next(Object.assign({}, list));
          });
      }
    });
  }

  searchCharaters(term: string): Observable<Characters[]> {
    let listArray = new Array<any>();
    if (!term.trim()) {
      return of([]);
    }

    this.listCharacters$.subscribe((list) => {
      listArray = [list];
      listArray.forEach(result => {
          return result.data?.results.filter((characterSelected: Character) => characterSelected.name == term);
      });
    });

    throw new Error("Shouldn't be reachable");

  }

}
