import { TestBed } from '@angular/core/testing';

import { LibraryAlbumsResolverService } from './library-albums-resolver.service';

describe('LibraryAlbumsResolverService', () => {
  let service: LibraryAlbumsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryAlbumsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
