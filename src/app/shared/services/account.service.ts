import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environment/environment';
import {Artist} from '@shared/models/artist';
import {Album} from '@shared/models/album';
import {Playlist} from '@shared/models/playlist';
import {Track} from '@shared/models/track';
import {User} from '@shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount() {
    return this.http.get<User>(`${environment.apiUrl}/me`);
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
}
