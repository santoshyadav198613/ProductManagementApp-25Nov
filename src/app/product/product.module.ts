import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductService } from '../service/product/product.service';
import { ProductnewService } from '../service/product/productnew.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  providers: [{ provide: ProductService, useClass: ProductnewService },]
})
export class ProductModule { }
