import { ListCharactersService } from 'app/api/listCharacters.service';
import { Component, OnInit } from '@angular/core';
import { Characters } from 'app/models/characters';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.listCharactersService.searchCharaters(term)),
    );

  }
}