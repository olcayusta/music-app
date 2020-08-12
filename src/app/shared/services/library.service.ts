import {Injectable} from '@angular/core';
import {Track} from '@shared/models/track';
import {environment} from '@environment/environment';
import {Playlist} from '@shared/models/playlist';
import {Album} from '@shared/models/album';
import {Artist} from '@shared/models/artist';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {
  }

  getTracks() {
    return this.http.get<Track[]>(`${environment.apiUrl}/tracks`);
  }

  getPlaylists() {
    return this.http.get<Playlist[]>(`${environment.apiUrl}/playlists`);
  }

  getAlbums() {
    return this.http.get<Album[]>(`${environment.apiUrl}/albums`);
  }

  getArtists() {
    return this.http.get<Artist[]>(`${environment.apiUrl}/artists`);
  }

  saveArtistToLibrary() {
    return this.http.get<Artist[]>(`${environment.apiUrl}/library/artists`);
  }
}
