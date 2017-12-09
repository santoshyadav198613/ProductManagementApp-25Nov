import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { ProductService } from './service/product/product.service';
import { ProductnewService } from './service/product/productnew.service';
import { CategoriesComponent } from './categories/categories.component';

import { CategoriesService } from './service/categories/categories.service';
import { CustomerComponent } from './customer/customer.component';

import { appConfig, APPVALUES } from './service/valueProvider/app.config';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: ProductService, useClass: ProductnewService }, 
    CategoriesService,
  { provide: appConfig, useValue: APPVALUES  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
