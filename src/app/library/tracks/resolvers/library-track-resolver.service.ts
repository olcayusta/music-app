import { Injectable } from '@angular/core';
import {AccountService} from '@shared/services/account.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Track } from '@shared/models/track';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryTrackResolverService implements Resolve<Track[]> {

  constructor(private accountService: AccountService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Track[]> | Promise<Track[]> | Track[] {
    return this.accountService.getTracks();
  }
}
