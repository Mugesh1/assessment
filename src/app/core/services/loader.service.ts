import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);  // Track loading state
  loading$ = this.loadingSubject.asObservable();  // Observable to bind to the UI

  show() {
    this.loadingSubject.next(true);  // Show loader
  }

  hide() {
    this.loadingSubject.next(false);  // Hide loader
  }
}
