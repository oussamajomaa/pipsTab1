import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-amende',
  templateUrl: './amende.page.html',
  styleUrls: ['./amende.page.scss'],
})
export class AmendePage implements OnInit {
  oneCategory:any
  amende:any
  constructor(private categoryService:CategoriesService) {
    this.oneCategory=this.categoryService.oneCategory
    this.amende=this.categoryService.amende
   }

  ngOnInit() {
  }

}
