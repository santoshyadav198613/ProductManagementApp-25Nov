import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges, OnDestroy , ViewEncapsulation
} from '@angular/core';
import { Product } from '../../service/product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation : ViewEncapsulation.Native
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() products: Product[];
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  price: number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
  }

  sendToParent() {
    this.message.emit('This message is from child component');
  }

  ngOnDestroy(): void {
    alert('Do you really want to move away');
  }

}
