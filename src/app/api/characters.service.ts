import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, take, tap } from 'rxjs/operators';
import { Characters } from "app/models/characters";

@Injectable({ providedIn: 'root'})

export class CharactersService {
  private API_URL = 'https://gateway.marvel.com'
  private CHARACTERS_URL = '/v1/public/characters'
  private PUBLIC_API_KEY = '259d79888a01634527fcd76951f071a1'

  constructor( private http: HttpClient ) {}

  /** GET Characters from the MARVEL INTERACTIVE API TESTER
   * @param limit - optional value to return the number of items to be returned
   * @param offset - optional value to return the number of items that will not be returned from the first item | optional
  */
  public getCharacters (limit?: number, offset?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Characters>>;
  public getCharacters (limit?: number, offset?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Characters>>>;
  public getCharacters (limit?: number, offset?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Characters>>>;
  public getCharacters (limit?: number, offset?: number, observe: any = 'body', reportProgress = false ): Observable<any> {

    let limitList;
    let offsetList;

    limit ? limitList = `limit=${limit}&` : limitList = '';
    offset ? offsetList = `offset=${offset}&` :  offsetList = '';

    const url = `${this.API_URL}${this.CHARACTERS_URL}?${limitList}${offsetList}apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<Characters>>(url,
    {
      observe: observe,
      reportProgress: reportProgress
    })
      .pipe(
        take(1),
        tap(() => console.log('Characters success')),
        catchError(this.handleError('getCharacters', []))
      );

  }

  /** GET Characters Details from the MARVEL INTERACTIVE API TESTER
   * @param id - value to the character id
  */
  public getCharacterDetail (id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Characters>>;
  public getCharacterDetail (id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Characters>>>;
  public getCharacterDetail (id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Characters>>>;
  public getCharacterDetail (id: number, observe: any = 'body', reportProgress = false ): Observable<any> {

    const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}?apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<Characters>>(url,
      {
        observe: observe,
        reportProgress: reportProgress
      })
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



