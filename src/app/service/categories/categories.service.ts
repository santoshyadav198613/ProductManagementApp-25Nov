import { Injectable } from '@angular/core';

import { Categories } from './categories';

@Injectable()
export class CategoriesService {
  categoryList: Categories[] = [];

  constructor() { }

  addCategories(cat: Categories) {
    this.categoryList.push(cat);
  }
}
