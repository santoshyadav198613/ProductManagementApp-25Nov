import { Directive, ElementRef, Renderer2, HostListener ,Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() color: string;

  constructor(private element: ElementRef, private render: Renderer2) {
    // element.nativeElement.style.backgroundColor = 'red';
    this.render.setStyle(element.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseover') onmouseover() {
    this.render.setStyle(this.element.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseout') onmouseout() {
    this.render.setStyle(this.element.nativeElement, 'background-color', 'white');
  }

  @HostListener('click') onclick() {
    this.render.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

}
