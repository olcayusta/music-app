import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LibraryComponent} from './library.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      {path: '', redirectTo: 'playlists'},
      {path: 'playlists', loadChildren: () => import('./playlists/playlists.module').then(m => m.PlaylistsModule)},
      {path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)},
      {path: 'tracks', loadChildren: () => import('./tracks/tracks.module').then(m => m.TracksModule)},
      {path: 'artists', loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {
}
