import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    CustomerComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: ProductService, useClass: ProductnewService }, 
    CategoriesService,
  { provide: appConfig, useValue: APPVALUES  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
