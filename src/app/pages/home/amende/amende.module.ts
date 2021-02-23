import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmendePageRoutingModule } from './amende-routing.module';

import { AmendePage } from './amende.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmendePageRoutingModule
  ],
  declarations: [AmendePage]
})
export class AmendePageModule {}
