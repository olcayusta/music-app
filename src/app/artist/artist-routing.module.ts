import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArtistComponent} from './artist.component';
import {ArtistResolverService} from './resolvers/artist-resolver.service';

const routes: Routes = [
  {path: ':artistId', component: ArtistComponent, resolve: { artist: ArtistResolverService }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {
}
