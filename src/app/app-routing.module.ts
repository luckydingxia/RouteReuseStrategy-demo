import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  {
    path: 'route-reuse-strategy',
    loadChildren: () => import('./route-reuse-strategy/route-reuse-strategy.module').then(m => m.RouteReuseStrategyModule),
  },
  {path: '**', redirectTo: '/home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
