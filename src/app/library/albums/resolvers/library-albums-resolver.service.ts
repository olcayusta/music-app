import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Album } from '@shared/models/album';
import {Observable} from 'rxjs';
import {AccountService} from '@shared/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryAlbumsResolverService implements Resolve<Album[]> {

  constructor(private accountService: AccountService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album[]> | Promise<Album[]> | Album[] {
    return this.accountService.getAlbums();
  }
}
