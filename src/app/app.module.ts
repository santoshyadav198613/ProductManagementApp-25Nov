import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { ProductService } from './service/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide : ProductService , useClass: ProductService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
