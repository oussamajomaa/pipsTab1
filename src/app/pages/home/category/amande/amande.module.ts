import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmandePageRoutingModule } from './amande-routing.module';

import { AmandePage } from './amande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmandePageRoutingModule
  ],
  declarations: [AmandePage]
})
export class AmandePageModule {}
