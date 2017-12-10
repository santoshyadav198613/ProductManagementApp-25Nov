import { TestBed, async, inject } from '@angular/core/testing';

import { TodoResolveGuard } from './todo-resolve.guard';

describe('TodoResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoResolveGuard]
    });
  });

  it('should ...', inject([TodoResolveGuard], (guard: TodoResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
