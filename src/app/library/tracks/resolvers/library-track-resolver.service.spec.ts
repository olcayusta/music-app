import { TestBed } from '@angular/core/testing';

import { LibraryTrackResolverService } from './library-track-resolver.service';

describe('LibraryTrackResolverService', () => {
  let service: LibraryTrackResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryTrackResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
