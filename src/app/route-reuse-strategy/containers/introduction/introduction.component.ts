import { MainContainerService } from '../../services/main-container.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less']
})
export class IntroductionComponent implements OnInit {
  id = 0;
  constructor(
    private service: MainContainerService
  ) { }

  ngOnInit() {
  }

  goToDetail() {
    this.service.setTab({
      url: `/route-reuse-strategy/detail/${this.id}`,
      name: `详情${this.id}`
    });
    this.id++;
  }

}
