import { TestBed } from '@angular/core/testing';

import { LibraryPlaylistsResolverService } from './library-playlists-resolver.service';

describe('LibraryPlaylistsResolverService', () => {
  let service: LibraryPlaylistsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryPlaylistsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
