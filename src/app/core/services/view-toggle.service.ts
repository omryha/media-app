import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewToggleService {
  isViewGrid = true; // true=grid, false=list
  isViewGridSubj: BehaviorSubject<boolean>;

  constructor() {
    this.isViewGridSubj = new BehaviorSubject(this.isViewGrid);
  }

  toggleView(): void {
    this.isViewGrid = !this.isViewGrid;
    this.isViewGridSubj.next(this.isViewGrid);
  }
}
