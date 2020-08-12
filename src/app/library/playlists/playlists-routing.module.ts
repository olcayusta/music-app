import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistsComponent } from './playlists.component';
import {LibraryPlaylistsResolverService} from './resolvers/library-playlists-resolver.service';

const routes: Routes = [{ path: '', component: PlaylistsComponent, resolve: { playlists: LibraryPlaylistsResolverService } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
