import { CharactersRoutingModule } from './characters.routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersComponent,
    CharacterDetailComponent
  ]
})

export class CharactersModule {}
