import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CharactersService } from 'app/api/characters.service';
import { Characters } from "app/models/characters";

@Injectable({ providedIn: 'root'})

export class ListCharactersService {

  private listCharactersSubject = new BehaviorSubject<Characters[]>([]);

  constructor(private charactersService: CharactersService) {}

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
    if (!term.trim()) { return of([]); }

    let charactersArray: any[] = [];
    let characterArray: any[] = [];
    let filterArray: any[] = [];
    let check = false;

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
