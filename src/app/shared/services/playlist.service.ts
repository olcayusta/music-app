import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environment/environment';
import {Playlist} from '@shared/models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Playlist[]>(`${environment.apiUrl}/me/playlists`);
  }

  save(playlist: Playlist) {
    return this.http.post<Playlist>(`${environment.apiUrl}/playlists`, playlist);
  }
}
