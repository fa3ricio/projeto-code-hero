import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiInterceptor } from './api/interceptor/http.interceptor';
import { CharactersService } from './api/services/characters.service';
import { ListCharactersService } from './api/services/listCharacters.service';
import { CharactersModule } from './pages/characters/characters.module';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer/footer.component';
import { SharedModule } from './shared/shares.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CharactersModule,
    HttpClientModule,
    SharedModule
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
