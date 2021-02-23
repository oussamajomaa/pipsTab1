import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmandePage } from './amande.page';

const routes: Routes = [
  {
    path: '',
    component: AmandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmandePageRoutingModule {}
