import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatePlaylistDialogComponent} from '../create-playlist-dialog/create-playlist-dialog.component';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateDialog() {
    const dialog = this.dialog.open(CreatePlaylistDialogComponent, {
      minWidth: 640
    });
  }
}
