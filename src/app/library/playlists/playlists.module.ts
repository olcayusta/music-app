import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PlaylistsModule { }
