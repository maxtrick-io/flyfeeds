import { TestBed } from '@angular/core/testing';

import { CanloadflyfeedsService } from './canloadflyfeeds.service';

describe('CanloadflyfeedsService', () => {
  let service: CanloadflyfeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanloadflyfeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
