import { Component, OnInit } from '@angular/core';
import { ListCharactersService } from 'app/api/listCharacters.service';
import { Characters } from 'app/models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  listCharacters!: Characters[];
  itemsPerPage = 10;

  constructor(private listCharactersService: ListCharactersService ) {}

  ngOnInit(): void {

    let limit = 50;
    let offset = undefined;

    if(!this.listCharacters || !this.listCharacters.length) {
      this.listCharactersService.getListCharacters(limit, offset);
      this.listCharactersService.listCharacters$
        .subscribe(list => {
          this.listCharacters = list;
        });
    }

  }

}
