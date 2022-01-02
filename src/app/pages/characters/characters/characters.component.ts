import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCharactersService } from 'app/api/services/listCharacters.service';
import { Characters } from 'app/models/characters';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  listCharacters!: Characters[];
  configPagination: any;
  currentPage: number = 1;
  page: number = 1;

  constructor(private listCharactersService: ListCharactersService,
              private router: Router,
              private route: ActivatedRoute ) {
    this.configPagination = {
      currentPage: 1,
      itemsPerPage: 10,
      id: 'characters-pagination'
    };
  }

  ngOnInit(): void {

    if(!this.listCharacters || !this.listCharacters.length) {
      this.listCharactersService.getListCharacters();
      this.listCharactersService.listCharacters$
        .subscribe(list => this.listCharacters = list);
    }
    this.getPage();
  }

  getPage() {
    this.route.queryParamMap
    .pipe(map(params => params.get("p")))
      .subscribe(page => (this.configPagination.currentPage = page));
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.listCharactersService.getPage(newPage);
    this.listCharactersService.page$.subscribe(atualPage => {
      this.page = atualPage;
      this.router.navigate([""], { queryParams: { p: newPage } });
    });
  }

}
