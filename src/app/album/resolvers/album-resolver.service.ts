import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Album} from '@shared/models/album';
import {Observable} from 'rxjs';
import {AlbumService} from '@shared/services/album.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolverService implements Resolve<Album> {

  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> | Promise<Album> | Album {
    return this.albumService.getAlbum(+route.paramMap.get('albumId'));
  }
}
