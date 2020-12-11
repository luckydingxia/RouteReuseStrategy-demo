import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MainContainerService {
  tab = new Subject<tabItem>();
  constructor() { }

  setTab(value: tabItem) {
    this.tab.next(value);
  }

  getTab() {
    return this.tab.asObservable();
  }

}

export interface tabItem {
  url: string;
  name: string;
}
