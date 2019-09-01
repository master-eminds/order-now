import { TestBed } from '@angular/core/testing';

import { RestaurantResolverService } from './restaurant-resolver.service';

describe('RestaurantResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantResolverService = TestBed.get(RestaurantResolverService);
    expect(service).toBeTruthy();
  });
});
