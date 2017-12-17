import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule   } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from '../routing/routing.module';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';
// import { TodoModule } from './todo/todo.module';
import { TodoMockService } from '../test/todo.mock';
import { TodoService } from '../service/todo/todo.service';

import { AppComponent } from '../app.component';
// import { ProductComponent } from './product/product.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { ProductDetailsComponent } from './product/product-details/product-details.component';
import {APP_BASE_HREF} from '@angular/common';

// import { ProductService } from './service/product/product.service';
// import { ProductnewService } from './service/product/productnew.service';
import { CategoriesComponent } from '../categories/categories.component';

// import { CategoriesService } from './service/categories/categories.service';
import { CustomerComponent } from '../customer/customer.component';

// import { appConfig, APPVALUES } from './service/valueProvider/app.config';
// import { TodoComponent } from './todo/todo.component';
// import { TodoListComponent } from './todo/todo-list/todo-list.component';

// import { ApiInterceptor } from './interceptor/http-interceptor';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';

// import { LoginService } from './service/login/login.service';
// import { AuthGuard } from './service/guard/auth.guard';
import { HoverDirective } from '../directives/hover.directive';
import { PasswordVaidatorDirective } from '../directives/password-vaidator.directive';
import { NavbarComponent } from '../navbar/navbar.component';
// import { ProductFilterPipe } from './custom/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    // ProductListComponent,
    // ProductDetailsComponent,
    CategoriesComponent,
    CustomerComponent,
    // TodoComponent,
    // TodoListComponent,
    PagenotfoundComponent,
    LoginComponent,
    HoverDirective,
    PasswordVaidatorDirective
    //,
    // ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    SharedModule,
    ProductModule,
    // TodoModule,
    RoutingModule
    // ,
    // RouterModule.forRoot([
    //   { path: 'product', component: ProductComponent },
    //   { path: 'categories', component: CategoriesComponent },
    //   { path: 'customer', component: CustomerComponent },
    //   { path: 'todo', component: TodoComponent },
    //   { path: '', redirectTo: 'product' , pathMatch : 'full' },
    //   { path: '**' , component: PagenotfoundComponent }
    // ])
  ],
  providers: [
    // { provide: ProductService, useClass: ProductnewService },
    { provide: TodoService, useClass: TodoMockService },
    {provide : APP_BASE_HREF , useValue : '/'}
    // LoginService, AuthGuard,
    // { provide: appConfig, useValue: APPVALUES },
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppTestingModule { }
