import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories:any[]
  
  constructor(public navCtrl:NavController, private categoryService:CategoriesService) {
    this.categories=this.categoryService.categories
   }

  ngOnInit() { 
    
  }

  
  showData(data:any){

    this.categoryService.getDescriptions(data)
    this.navCtrl.navigateRoot('details')
  }
}
