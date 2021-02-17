import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchQuery: string;
  searchQuerySubj: BehaviorSubject<string>;

  constructor() {
    this.searchQuerySubj = new BehaviorSubject(this.searchQuery);
  }

  updateSearchQuery(newValue: string): void {
    this.searchQuery = newValue;
    this.searchQuerySubj.next(this.searchQuery);
  }
}
