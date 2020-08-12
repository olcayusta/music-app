import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from '@shared/models/album';
import {Title} from '@angular/platform-browser';
import {environment} from '@environment/environment';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {
  album: Album;

  constructor(private route: ActivatedRoute, private title: Title) {
  }

  ngOnInit() {
    this.album = this.route.snapshot.data.album;
    this.title.setTitle(`${this.album.title} - ${environment.appName}`);
  }

}
