import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'solde',
    loadChildren: () => import('./pages/solde/solde.module').then( m => m.SoldePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/home/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'points',
    loadChildren: () => import('./pages/home/points/points.module').then( m => m.PointsPageModule)
  },
  {
    path: 'sousCategory',
    loadChildren: () => import('./pages/home/sous-category/sous-category.module').then( m => m.SousCategoryPageModule)
  },
  {
    path: 'amende',
    loadChildren: () => import('./pages/home/amende/amende.module').then( m => m.AmendePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
