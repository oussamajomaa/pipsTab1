import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SousCategoryPage } from './sous-category.page';

const routes: Routes = [
  {
    path: '',
    component: SousCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SousCategoryPageRoutingModule {}
