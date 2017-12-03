import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { ProductService } from './service/product/product.service';
import { ProductnewService } from './service/product/productnew.service';
import { CategoriesComponent } from './categories/categories.component';

import { CategoriesService } from './service/categories/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: ProductService, useClass: ProductnewService }, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
