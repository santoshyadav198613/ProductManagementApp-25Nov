import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {
  productList: Product[] = [];
  constructor() { }

  getProducts() {
    return this.productList = [
      { id: 1, name: 'Lenovo I7 laptop', price: 34000, mfd: new Date('31-Dec-2015') },
      { id: 2, name: '1.5 ton AC', price: 64000, mfd: new Date('31-Dec-2012') },
      { id: 3, name: 'Refigerator', price: 94000, mfd: new Date('31-Dec-2011') }
    ];
  }

  addProduct() {
    let product = { id: 4, name: 'Apple X', price: 44000, mfd: new Date('31-Dec-2011') };
    this.productList.push(product);
  }

}
