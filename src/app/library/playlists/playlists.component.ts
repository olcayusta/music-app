import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatePlaylistDialogComponent} from '../../create-playlist-dialog/create-playlist-dialog.component';
import {Playlist} from '@shared/models/playlist';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.playlists = this.route.snapshot.data.playlists;
  }

  openDialog() {
    const dialog = this.dialog.open(CreatePlaylistDialogComponent, {
      minWidth: 768
    });
  }
}
