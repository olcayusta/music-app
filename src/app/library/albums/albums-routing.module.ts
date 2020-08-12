import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AlbumsComponent} from './albums.component';
import {AlbumResolverService} from '../../album/resolvers/album-resolver.service';

const routes: Routes = [
  {path: '', component: AlbumsComponent, resolve: {albums: AlbumResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
