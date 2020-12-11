import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menus = [
    { url: '/home-page', name: '首页' },
    { url: '/route-reuse-strategy', name: '路由复用懒加载demo' },
  ]
}
