import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandlingService } from '../services/error-handling.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorHandler: ErrorHandlingService) {}

  // Intercept function
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((observer) => {
      next.handle(req).subscribe(
        // request succeeded
        (res: HttpResponse<any>) => {
          if (res instanceof HttpResponse) {
            observer.next(res);
          }
        },
        (err: HttpErrorResponse) => {
          // Handle errors
          this.errorHandler.handleError(err);
        }
      );
    });
  }
}
