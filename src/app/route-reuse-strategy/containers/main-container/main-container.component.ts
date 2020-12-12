import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SimpleReuseStrategy } from '@/SimpleReuseStrategy';
import { MainContainerService, tabItem } from '../../services/main-container.service';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.less']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  index = 0;
  tabs: tabItem[] = [
    { url: '/route-reuse-strategy', name: '管理页面' }
  ];

  destory$ = new Subject();

  constructor(
    private route: Router,
    private service: MainContainerService,
    private message: NzMessageService
  ) {
    this.route.events.pipe(
      takeUntil(this.destory$),
      filter(e => e instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentUrl = decodeURI(event.urlAfterRedirects);
      const existIndex = this.tabs.findIndex((item: tabItem) => item.url === currentUrl);
      if (existIndex !== -1) {
        this.index = existIndex;
      } else {
        SimpleReuseStrategy.deleteRouteCache(currentUrl);
        this.toDetail(0);
      }
    });
  }

  ngOnInit() {
    this.service.getTab().pipe(
      takeUntil(this.destory$)
    ).subscribe((tab: tabItem) => {
      const existIndex = this.tabs.findIndex((item: tabItem) =>  item.url === tab.url );
      if (existIndex !== -1) {
        this.toDetail(existIndex);
      } else {
        if (this.tabs.length >= 11) {
          this.message.info('最多只可以打开10个详情哦！');
          return;
        }
        this.tabs.push(tab);
        this.toDetail(this.tabs.length - 1);
      }
    });
  }

  closeTab({ index }: { index: number }): void {
    const tab: tabItem = this.tabs[index];
    SimpleReuseStrategy.deleteRouteCache(tab.url);
    this.tabs.splice(index, 1);
    this.toDetail( 0 );
  }

  toDetail(index) {
    // if (this.index === index) { return; }
    this.route.navigate([ this.tabs[index].url ]);
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
    SimpleReuseStrategy.deleteAllRouteCache();
  }

}
