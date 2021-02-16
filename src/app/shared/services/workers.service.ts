import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { baseApiUrl } from 'src/assets/config/config';
import { Flight } from '../models/flight.model';
import { Worker } from '../models/worker.model';

const INTERVAL = 60000; // 1 minute interval for flights polling

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private baseApiUrl = baseApiUrl; // workers and flights Endpoint
  private id: number; // id of a worker

  constructor(private httpClient: HttpClient) { }

  // Get a list of all workers
  getWorkers(): Observable<Worker[]> {
    return this.httpClient.get<Worker[]>(baseApiUrl);
  }

  // Get all flights per worker. poll every 1 minute
  getFlightsByWorkerId(id: number): Observable<Flight[]> {
    return timer(0, INTERVAL).pipe(
      switchMap(_ => this.httpClient.get<Flight[]>(`${this.baseApiUrl}${id}`))
    );
  }
}
