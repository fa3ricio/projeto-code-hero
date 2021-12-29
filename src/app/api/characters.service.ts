import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, take, tap } from 'rxjs/operators';
import { characters } from "app/models/characters";

@Injectable({ providedIn: 'root'})

export class CharactersService {
  private APIURL = 'https://gateway.marvel.com'
  private CHARACTERSURL = '/v1/public/characters'
  private APIKEY = '259d79888a01634527fcd76951f071a1'

  constructor( private http: HttpClient ) {}

  /** GET Characters from the MARVEL INTERACTIVE API TESTER */
  getCharacters (limite: number): Observable<any> {

    let limit = limite;
    const url = `${this.APIURL}${this.CHARACTERSURL}?limit=${limit}&apikey=${this.APIKEY}`;

    return this.http.get<characters>(url)
      .pipe(
        tap(() => console.log('Characters success')),
        catchError(this.handleError('getCharacters', []))
      );

  }

  /** GET Characters from the MARVEL INTERACTIVE API TESTER */
  getCharacterDetail (id: number): Observable<any> {

    const url = `${this.APIURL}${this.CHARACTERSURL}/${id}?apikey=${this.APIKEY}`;

    return this.http.get<characters>(url)
      .pipe(
        take(1),
        tap(() => console.log('Character Detail success')),
        catchError(this.handleError('getCharacterDetail', []))
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



