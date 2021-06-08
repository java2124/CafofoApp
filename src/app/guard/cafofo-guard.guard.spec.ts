import { TestBed } from '@angular/core/testing';

import { CafofoGuardGuard } from './cafofo-guard.guard';

describe('CafofoGuardGuard', () => {
  let guard: CafofoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CafofoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
