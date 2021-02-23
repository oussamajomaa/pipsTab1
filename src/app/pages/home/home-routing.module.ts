import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {path: '',component: HomePage},
  {
    path: 'sous-category',
    loadChildren: () => import('./sous-category/sous-category.module').then( m => m.SousCategoryPageModule)
  },
  {
    path: 'amende',
    loadChildren: () => import('./amende/amende.module').then( m => m.AmendePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
