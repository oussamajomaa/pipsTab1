import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SousCategoryPageRoutingModule } from './sous-category-routing.module';

import { SousCategoryPage } from './sous-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SousCategoryPageRoutingModule
  ],
  declarations: [SousCategoryPage]
})
export class SousCategoryPageModule {}
