import { TestBed } from '@angular/core/testing';

import { LibraryArtistsResolverService } from './library-artists-resolver.service';

describe('LibraryArtistsResolverService', () => {
  let service: LibraryArtistsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryArtistsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
