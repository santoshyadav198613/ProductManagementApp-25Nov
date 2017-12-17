import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
// import { TodoComponent } from '../todo/todo.component';
import { CustomerComponent } from '../customer/customer.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductComponent } from '../product/product.component';
import { LoginComponent } from '../login/login.component';

import { AuthGuard } from '../service/guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
      { path: 'todo', loadChildren: '../todo/todo.module#TodoModule' },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  // exports : [RouterModule],
  declarations: []
})
export class RoutingModule { }
