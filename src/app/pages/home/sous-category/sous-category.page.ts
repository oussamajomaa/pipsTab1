import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sous-category',
  templateUrl: './sous-category.page.html',
  styleUrls: ['./sous-category.page.scss'],
})
export class SousCategoryPage implements OnInit {
  oneCategory:any
  constructor(private categoryService:CategoriesService, public navCtrl:NavController) { 
    this.oneCategory=this.categoryService.oneCategory
  }

  ngOnInit() {
  }

  showAmende(data){
    this.categoryService.getAmende(data)
    this.navCtrl.navigateRoot('amende')
  }
}
