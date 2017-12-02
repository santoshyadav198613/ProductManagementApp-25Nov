import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { Product } from './product';
import { ProductDetailsComponent } from './product-details/product-details.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName: string = '32inch LED TV';
  isVisible: boolean = false;
  productList: Product[] = [
    { id: 1, name: 'Lenovo I7 laptop', price: 34000, mfd: new Date('31-Dec-2015') },
    { id: 2, name: '1.5 ton AC', price: 64000, mfd: new Date('31-Dec-2012') },
    { id: 3, name: 'Refigerator', price: 94000, mfd: new Date('31-Dec-2011') }
  ];
  messageFromChild: string;
  @ViewChild(ProductDetailsComponent) prodDetailsComponent: ProductDetailsComponent;

  @ViewChild('maindiv') div: ElementRef;
  userRole: string = 'Super Admin';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.div.nativeElement.innerText = 'This data is assigned from ViewChild';
    this.prodDetailsComponent.productName = 'LED TV';
    this.prodDetailsComponent.sendAlert();
    this.isVisible = !this.isVisible;
  }

  receiveFromChild(message: string) {
    this.messageFromChild = message;
  }
}
