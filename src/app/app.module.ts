import { ListCharactersService } from './api/listCharacters.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CharactersService } from './api/characters.service';
import { AppComponent } from './app.component';
import { CharactersModule } from './pages/characters/characters.module';
import { HeaderComponent } from './pages/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CharactersModule,
    HttpClientModule
  ],
  providers: [
    CharactersService,
    ListCharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
