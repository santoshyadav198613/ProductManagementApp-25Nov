import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productName: string;
  constructor() { }

  ngOnInit() {
  }

  sendAlert() {
    // alert('This is product details function');
  }

}
