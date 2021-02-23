import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-amande',
  templateUrl: './amande.page.html',
  styleUrls: ['./amande.page.scss'],
})
export class AmandePage implements OnInit {
  descriptions:any
  amande:any
  category:any
  constructor(private categoryService:CategoriesService, public navCtrl:NavController) {
    this.descriptions=this.categoryService.descriptions
    this.amande=this.categoryService.amendDetail
    this.category=this.categoryService.category
    console.log(this.amande)

   
   }

  ngOnInit() {
  
  }

  
}
