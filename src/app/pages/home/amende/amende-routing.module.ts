import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmendePage } from './amende.page';

const routes: Routes = [
  {
    path: '',
    component: AmendePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmendePageRoutingModule {}
