import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Album} from '@shared/models/album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsComponent implements OnInit {
  items = [
    {
      img: 'https://resources.tidal.com/images/87e7e53f/8df2/4a54/8932/37ded637771f/1280x1280.jpg'
    },
    {
      img: 'https://resources.tidal.com/images/25893102/1355/48f7/901b/880b7c04131d/1280x1280.jpg'
    },
    {
      img: 'https://resources.tidal.com/images/d5aed502/3d67/4a9a/9840/998797c9dbba/1280x1280.jpg'
    },
    {
      img: 'https://resources.tidal.com/images/31ed71e8/92b0/4985/a3be/459db5239acd/1280x1280.jpg'
    }
  ];
  albums: Album[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.albums = this.route.snapshot.data.albums;
  }

}
