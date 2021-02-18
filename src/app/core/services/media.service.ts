import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  reloader$ = new BehaviorSubject(null);

  refresh$ = this.reloader$.pipe(switchMap(() => this.getMedia()));

  constructor(private http: HttpClient) {}

  getMedia() {
    return this.http.get<Response>(API_URL);
  }

  updateMediaTitle(id: string, newTitle: string) {
    // *** Patch request abstraction
    return this.http
      .patch(API_URL, {
        Title: newTitle,
      })
      .subscribe(
        (_) => {
          console.log('Title updated!');
        },
        (error) => {
          throw error;
        }
      );
  }
}
