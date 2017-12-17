import { Injectable } from '@angular/core';

import { Categories } from '../service/categories/categories';

@Injectable()
export class CategoriesService {
  categoryList: Categories[] = [];

  constructor() { }

  addCategories(cat: Categories) {
    this.categoryList.push(cat);
  }
}
