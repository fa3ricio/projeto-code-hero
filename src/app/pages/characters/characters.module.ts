import { SharedModule } from './../../shared/shares.module';
import { CharactersRoutingModule } from './characters.routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from 'ngx-pagination';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersSearchComponent } from './characters-search/characters-search.component';

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
    CharactersSearchComponent
  ]
})

export class CharactersModule {}
