import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      let handled: boolean = false;

      return next.handle(request)
      .pipe(
        retry(1),
        catchError((returnedError) => {
          let errorMessage = null;

          if (returnedError.error instanceof ErrorEvent) {
            errorMessage = `Error Event: ${returnedError.error.message}`;
          } else if (returnedError instanceof HttpErrorResponse) {
            errorMessage = `${returnedError.error}`;
            handled = this.handleServerSideError(returnedError);
          }

          if (!handled) {
            if (errorMessage) {
              return throwError(errorMessage);
            } else {
              return throwError("Ocorreu um problema inesperado!");
            }
          } else {
            return of(returnedError);
          }
        })
      )
  }

  private handleServerSideError(error: HttpErrorResponse): boolean {
    let handled: boolean = false;
    switch (error.status) {
      case 404:
        console.warn("O personagem não foi encontrado ou esta página não existe!");
        this.router.navigate(['/characters/not-found']);
        handled = true;
        break;
      case 429:
        console.warn("O limite de solicitações diárias para a API Marvel foi atingido!");
        this.router.navigate(['/characters/not-found?erro=limite-de-solicitacoes-excedido']);
        handled = true;
        break;
    }
    return handled;
  }

}
