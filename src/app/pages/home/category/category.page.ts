import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  category:any
  
  constructor(public navCtrl:NavController, private categoryService:CategoriesService) {
    this.category=this.categoryService.category
   }

  ngOnInit() { }

  showSousCategory(data){
    this.categoryService.getSousGategory(data)
    this.navCtrl.navigateRoot("sousCategory")
  }

}
