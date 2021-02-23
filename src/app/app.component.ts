import { Component } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private categoryService:CategoriesService) {}
}
