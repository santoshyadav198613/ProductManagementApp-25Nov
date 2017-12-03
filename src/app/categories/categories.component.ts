import { Component, OnInit } from '@angular/core';

import { Categories } from '../service/categories/categories';
import { CategoriesService } from '../service/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories = new Categories();
  constructor(private catService : CategoriesService) { }

  ngOnInit() {
  }

  save(catForm) {
      console.log(this.categories);
      this.catService.addCategories(this.categories);
      catForm.reset();
  }

}
