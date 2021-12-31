import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersNotFoundComponent } from './characters-not-found/characters-not-found.component';

const charactersRoutes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'characters/not-found', component: CharactersNotFoundComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(charactersRoutes)
  ],
  exports: [RouterModule]
})

export class CharactersRoutingModule {}
