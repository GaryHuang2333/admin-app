import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tab } from '../lib/tab';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  subject: Subject<any>;

  constructor() { }

  popup(tab: Tab):void{
    this.subject.next(tab);
  }
}
