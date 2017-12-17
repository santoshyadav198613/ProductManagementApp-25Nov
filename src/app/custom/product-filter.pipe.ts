import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../service/product/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], price: number): Product[] {
    console.log(value);
    console.log(price);
    return value.filter((data) =>  data.price > price);
  }

}
