import { TestBed } from '@angular/core/testing';

import { ArtistResolverService } from './artist-resolver.service';

describe('ArtistResolverService', () => {
  let service: ArtistResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
