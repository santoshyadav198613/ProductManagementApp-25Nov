import { Injectable } from '@angular/core';

import { ProductService } from './product.service';

@Injectable()
export class ProductnewService extends ProductService {

  constructor() {
    super();
  }

  getProducts() {
    return this.productList = [
      { id: 1, name: 'Lenovo I7 laptop', price: 34000, mfd: new Date('31-Dec-2015') },
      { id: 2, name: '1.5 ton AC', price: 64000, mfd: new Date('31-Dec-2012') },
      { id: 3, name: 'Refigerator', price: 94000, mfd: new Date('31-Dec-2011') },
      { id: 4, name: 'Washing Machine', price: 44000, mfd: new Date('31-Dec-2014') },
      { id: 5, name: 'MicroWave', price: 14000, mfd: new Date('31-Dec-2016') },
    ];

  }

}
