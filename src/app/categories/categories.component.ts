import { Component, OnInit, Inject } from '@angular/core';


import { Categories } from '../service/categories/categories';
import { CategoriesService } from '../service/categories/categories.service';

import { appConfig } from '../service/valueProvider/app.config'
import { IValueProvide } from '../service/valueProvider/ivalue.interface';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories = new Categories();
  constructor(private catService: CategoriesService,
   @Inject(appConfig) private config: IValueProvide  ) { }

  ngOnInit() {
    console.log(this.config);
  }

  save(catForm) {
    console.log(this.categories);
    this.catService.addCategories(this.categories);
    this.categories = new Categories();
    catForm.reset();
  }

}
