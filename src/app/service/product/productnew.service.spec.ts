import { TestBed, inject } from '@angular/core/testing';

import { ProductnewService } from './productnew.service';

describe('ProductnewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductnewService]
    });
  });

  it('should be created', inject([ProductnewService], (service: ProductnewService) => {
    expect(service).toBeTruthy();
  }));
});
