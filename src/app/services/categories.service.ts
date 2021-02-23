import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  category: any
  oneCategory: any
  amende: any
  constructor() {
    fetch('./assets/category.json').then(data => {
      data.json().then(response => {
        this.category = response
      })
    })
  }

  getSousGategory(data) {
    this.oneCategory = data
  }

  getAmende(data) {
    this.amende = data
  }


}
