import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AlbumComponent} from './album.component';
import {AlbumResolverService} from './resolvers/album-resolver.service';

const routes: Routes = [
  {path: ':albumId', component: AlbumComponent, resolve: { album: AlbumResolverService }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {
}
