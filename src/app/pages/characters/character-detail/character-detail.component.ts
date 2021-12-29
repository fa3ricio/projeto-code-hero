import { Observable } from 'rxjs';
import { CharactersService } from 'app/api/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { character } from 'app/models/character';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterId: number | string | null;
  character$!: Observable<character>;
  character!: character;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute) {
    this.characterId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.characterId) {
      this.character$ = this.charactersService.getCharacterDetail(+this.characterId).pipe(share());
      this.character$.subscribe(result => {
        this.character = result;
        console.log(result)})
    }
  }

}
