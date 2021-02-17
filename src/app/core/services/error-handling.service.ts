import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(private toastr: ToastrService) {}

  public handleError(err: HttpErrorResponse): void {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      // frontend error
      errorMessage = `Error occurred: ${err.error.message}`;
    } else {
      // backend failed response
      errorMessage = `Oops...something went wrong`;
    }
    this.toastr.error(errorMessage);
  }
}
