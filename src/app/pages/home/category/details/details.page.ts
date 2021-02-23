import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  category: any
  descriptions:any

  constructor(private CategoriesService:CategoriesService, public navCtrl:NavController) {
    this.category=this.CategoriesService.category
    this.descriptions=this.CategoriesService.descriptions
    
   }

  ngOnInit() {
   
  }
  showAmende(amande){
    this.CategoriesService.getAmende(amande)
    this.navCtrl.navigateRoot('amende')

  }

}
