import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '@shared/models/album';
import {environment} from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbum(albumId: number) {
    return this.http.get<Album>(`${environment.apiUrl}/albums/${albumId}`);
  }
}
