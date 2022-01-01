import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'app/shared/shares.module';
import { CharactersRoutingModule } from './characters.routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharactersSearchComponent } from './characters-search/characters-search.component';
import { CharactersNotFoundComponent } from './characters-not-found/characters-not-found.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterDetailExtrasComponent } from './character-detail-extras/character-detail-extras.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [
    CharactersComponent,
    CharacterDetailComponent,
    CharactersSearchComponent,
    CharactersNotFoundComponent,
    CharacterDetailExtrasComponent
  ]
})

export class CharactersModule {}
