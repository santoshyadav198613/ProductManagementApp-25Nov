import { HoverDirective } from './hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';


describe('HoverDirective', () => {
  it('should create an instance', () => {
    let elem: ElementRef;
    let rederer: Renderer2;
    const directive = new HoverDirective(elem, rederer);
    expect(directive).toBeTruthy();
  });
});
