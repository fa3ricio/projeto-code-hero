import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Characters } from "app/models/characters";
import { CharactersService } from 'app/api/characters.service';

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
        this.charactersService
          .getCharacters(limit, offset)
          .subscribe((list) => {
            console.log('List Subject...');
            this.listCharactersSubject.next(Object.assign({}, list));
          });
      }
    });
  }
}
