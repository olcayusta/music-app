import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-grid-item',
  templateUrl: './home-grid-item.component.html',
  styleUrls: ['./home-grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGridItemComponent implements OnInit {
  @Input() item: any;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addToPlaylist() {
    this.snackBar.open('Added to playlist');
  }
}
