import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Playlist} from '@shared/models/playlist';
import {Observable} from 'rxjs';
import {AccountService} from '@shared/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryPlaylistsResolverService implements Resolve<Playlist[]> {

  constructor(private accountService: AccountService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Playlist[]> | Promise<Playlist[]> | Playlist[] {
    return this.accountService.getPlaylists();
  }
}
