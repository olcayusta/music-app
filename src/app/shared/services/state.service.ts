import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  hideSubject: Subject<boolean> = new Subject<boolean>();
  hide$ = this.hideSubject.asObservable();

  constructor() { }

  makeHide(status: boolean) {
    this.hideSubject.next(true);
  }
}
