import {
  Component, OnInit, ViewChild, ElementRef,
  ViewChildren, QueryList, DoCheck, AfterViewInit
} from '@angular/core';
import { Product } from '../service/product/product';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  // providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck, AfterViewInit {
  productName: string = '32inch LED TV';
  isVisible: boolean = false;
  productList: Product[];
  messageFromChild: string;
  // productService: ProductService = new ProductService();
  @ViewChild(ProductDetailsComponent) prodDetailsComponent: ProductDetailsComponent;

  @ViewChild('maindiv') div: ElementRef;

  @ViewChildren(ProductDetailsComponent) prodChildrenComp: QueryList<ProductDetailsComponent>;
  userRole: string = 'Super Admin';
  values=  [
    { key: 1, Value: 'true' },
    { key: 2, Value: 'False' }
  ];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
    console.log(this.prodChildrenComp);
    this.div.nativeElement.innerText = 'This data is assigned from ViewChild';
    this.prodDetailsComponent.productName = 'LED TV';
    this.prodDetailsComponent.sendAlert();
  }

  ngDoCheck(): void {
    console.log('This is do check evevnt');
  }

  toggle() {
    this.isVisible = !this.isVisible;

  }

  addProduct() {
    this.productService.addProduct();
    // this.productList = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    console.log(this.prodChildrenComp);
    this.prodChildrenComp.forEach(function (child) {
      setTimeout(() => child.productName = 'HD TV', 0);
      // child.productName = 'HD TV';
      // child.sendAlert();
    });
  }

  receiveFromChild(message: string) {
    this.messageFromChild = message;
  }
}
