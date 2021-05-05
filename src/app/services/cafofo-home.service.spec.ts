import { TestBed } from '@angular/core/testing';

import { CafofoHomeService } from './cafofo-home.service';

describe('CafofoHomeService', () => {
  let service: CafofoHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafofoHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
