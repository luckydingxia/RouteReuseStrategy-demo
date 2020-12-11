import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouteReuseStrategyRoutingModule } from './route-reuse-strategy-routing.module';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { IntroductionComponent } from './containers/introduction/introduction.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DetailComponent } from './containers/detail/detail.component';
import { MainContainerService } from './services/main-container.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    MainContainerComponent,
    IntroductionComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouteReuseStrategyRoutingModule,
    NzTabsModule,
    NzMessageModule,
    NzInputModule
  ],
  providers: [
    MainContainerService
  ]
})
export class RouteReuseStrategyModule { }
