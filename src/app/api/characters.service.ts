import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { character } from "app/models/character";

@Injectable({ providedIn: 'root'})

export class CharactersService {
  private APIURL = 'https://gateway.marvel.com'
  private CHARACTERSURL = '/v1/public/characters'
  private APIKEY = '259d79888a01634527fcd76951f071a1'

  constructor( private http: HttpClient ) {}

  /** GET Characters from the MARVEL INTERACTIVE API TESTER */
  getCharacters (limite: number): Observable<character[]> {

    let limit = limite;
    const url = `${this.APIURL}${this.CHARACTERSURL}?limit=${limit}&apikey=${this.APIKEY}`;

    return this.http.get<character[]>(url)
      .pipe(
        tap(() => console.log('Characters success')),
        catchError(this.handleError('getCharacters', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}



