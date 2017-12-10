import { Component } from '@angular/core';

import { ProductService } from './service/product/product.service';
import { LoginService } from './service/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>This is
  //  our app</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private productService: ProductService,
    public loginService: LoginService) {

  }

  addproduct() {
    this.productService.addProduct();
  }
}
