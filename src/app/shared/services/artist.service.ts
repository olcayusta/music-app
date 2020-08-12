import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artist} from '../models/artist';
import {environment} from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtist(artistId: number) {
    return this.http.get<Artist>(`${environment.apiUrl}/artists/${artistId}`);
  }
}
