import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, take, tap } from 'rxjs/operators';
import { Characters } from "app/models/characters";
import { ComicsCollection } from 'app/models/comicsCollection';
import { EventsCollection } from 'app/models/eventsCollection';
import { SeriesCollection } from 'app/models/seriesCollection';
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root'})

export class CharactersService {
  private API_URL = environment.apiUrl;
  private CHARACTERS_URL = 'characters'
  private PUBLIC_API_KEY = environment.apiPublicKey;
  private CHARACTERS_LIMIT = environment.settings.charactersLimit;
  private EXTRAS_LIMIT = environment.settings.extrasLimit;

  constructor(private http: HttpClient) { }

  /** GET Characters from the MARVEL INTERACTIVE API TESTER
   * @param limit - optional value to return the number of items to be returned
   * @param offset - optional value to return the number of items that will not be returned from the first item | optional
  */
  public getCharacters(limit?: number, offset?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Characters>>;
  public getCharacters(limit?: number, offset?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Characters>>>;
  public getCharacters(limit?: number, offset?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Characters>>>;
  public getCharacters(limit?: number, offset?: number, observe: any = 'body', reportProgress = false): Observable<any> {

    let limitList;
    let offsetList;

    limit ? limitList = `limit=${limit}&` : limitList = this.CHARACTERS_LIMIT;
    offset ? offsetList = `offset=${offset}&` : offsetList = '';

    const url = `${this.API_URL}${this.CHARACTERS_URL}?${limitList}${offsetList}apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<Characters>>(url,
      {
        observe: observe,
        reportProgress: reportProgress
      })
      .pipe(
        take(1),
        tap(),
        catchError(this.handleError('getCharacters', []))
      );

  }

  /** GET Characters Details from the MARVEL INTERACTIVE API TESTER
   * @param id - value to the character id
  */
  public getCharacterDetail(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Characters>>;
  public getCharacterDetail(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Characters>>>;
  public getCharacterDetail(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Characters>>>;
  public getCharacterDetail(id: number, observe: any = 'body', reportProgress = false): Observable<any> {

    const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}?apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<Characters>>(url,
      {
        observe: observe,
        reportProgress: reportProgress
      })
      .pipe(
        take(1),
        tap(),
        catchError(this.handleError('getCharacterDetail', []))
      );

  }

  /** GET Character Comics from the MARVEL INTERACTIVE API TESTER
   * @param id - value to the character id
  */
  public getCharacterComics(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ComicsCollection>>;
  public getCharacterComics(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ComicsCollection>>>;
  public getCharacterComics(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ComicsCollection>>>;
  public getCharacterComics(id: number, observe: any = 'body', reportProgress = false): Observable<any> {

    let limitExtras: string;
    this.EXTRAS_LIMIT ? limitExtras = `limit=${this.EXTRAS_LIMIT}&` : limitExtras = '';

    const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}/comics?${limitExtras}apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<ComicsCollection>>(url,
      {
        observe: observe,
        reportProgress: reportProgress
      })
      .pipe(
        take(1),
        tap(),
        catchError(this.handleError('getComicsCollection', []))
      );

  }

  /** GET Character Events from the MARVEL INTERACTIVE API TESTER
   * @param id - value to the character id
  */
  public getCharacterEvents(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<EventsCollection>>;
  public getCharacterEvents(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EventsCollection>>>;
  public getCharacterEvents(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EventsCollection>>>;
  public getCharacterEvents(id: number, observe: any = 'body', reportProgress = false): Observable<any> {

    let limitExtras: string;
    this.EXTRAS_LIMIT ? limitExtras = `limit=${this.EXTRAS_LIMIT}&` : limitExtras = '';

    const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}/events?${limitExtras}apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<EventsCollection>>(url,
      {
        observe: observe,
        reportProgress: reportProgress
      })
      .pipe(
        take(1),
        tap(),
        catchError(this.handleError('getEventsCollection', []))
      );

  }

  /** GET Character Series from the MARVEL INTERACTIVE API TESTER
   * @param id - value to the character id
  */
  public getCharacterSeries(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<SeriesCollection>>;
  public getCharacterSeries(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SeriesCollection>>>;
  public getCharacterSeries(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SeriesCollection>>>;
  public getCharacterSeries(id: number, observe: any = 'body', reportProgress = false): Observable<any> {

    let limitExtras: string;
    this.EXTRAS_LIMIT ? limitExtras = `limit=${this.EXTRAS_LIMIT}&` : limitExtras = '';

    const url = `${this.API_URL}${this.CHARACTERS_URL}/${id}/series?${limitExtras}apikey=${this.PUBLIC_API_KEY}`;

    return this.http.get<Array<SeriesCollection>>(url,
      {
        observe: observe,
        reportProgress: reportProgress
      })
      .pipe(
        take(1),
        tap(),
        catchError(this.handleError('getSeriesCollection', []))
      );

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}



