import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './pages/characters/characters.module';
import { HeaderComponent } from './pages/components/header/header.component';
import { CharactersService } from './api/characters.service';
import { ListCharactersService } from './api/listCharacters.service';
import { ApiInterceptor } from './api/interceptor/http.interceptor';

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
    ListCharactersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
