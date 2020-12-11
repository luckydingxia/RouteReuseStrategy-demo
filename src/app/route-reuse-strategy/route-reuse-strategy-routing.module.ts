import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './containers/detail/detail.component';
import { IntroductionComponent } from './containers/introduction/introduction.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      { path: '', component: IntroductionComponent, data: { keep: true }},
      { path: 'detail/:id', component: DetailComponent, data: { keep: true }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteReuseStrategyRoutingModule { }
