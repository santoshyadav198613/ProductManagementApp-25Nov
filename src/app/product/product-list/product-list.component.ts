import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges, OnDestroy
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() products: Product[];
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
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
