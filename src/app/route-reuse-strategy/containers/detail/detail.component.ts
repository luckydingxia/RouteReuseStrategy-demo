import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit, OnDestroy {
  name: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('销毁');
  }

}
