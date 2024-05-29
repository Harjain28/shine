import { TestBed } from '@angular/core/testing';

import { RandomPricingService } from './random-pricing.service';

describe('RandomPricingService', () => {
  let service: RandomPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
