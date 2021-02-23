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
    path: 'details',
    loadChildren: () => import('./pages/home/category/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'amende',
    loadChildren: () => import('./pages/home/category/amande/amande.module').then( m => m.AmandePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
