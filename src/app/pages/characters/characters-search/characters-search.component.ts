import { Component, OnInit } from '@angular/core';
import { Characters } from 'app/models/characters';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ListCharactersService } from 'app/api/services/listCharacters.service';

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.css']
})
export class CharactersSearchComponent implements OnInit {

  characters$!: Observable<Characters[]>;

  private searchTerms = new Subject<string>();

  constructor(private listCharactersService: ListCharactersService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.characters$ = this.searchTerms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(
        (term: string) => this.listCharactersService.searchCharaters(term)),
    );
  }
}
