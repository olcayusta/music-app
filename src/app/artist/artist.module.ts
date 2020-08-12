import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtistRoutingModule} from './artist-routing.module';
import {ArtistComponent} from './artist.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MatButtonModule
  ]
})
export class ArtistModule {
}
