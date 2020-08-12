import {Injectable} from '@angular/core';
import {ArtistService} from '@shared/services/artist.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistResolverService implements Resolve<any> {

  constructor(private artistService: ArtistService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.artistService.getArtist(+route.paramMap.get('artistId'));
  }
}
