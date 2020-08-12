import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Artist} from '@shared/models/artist';
import {ActivatedRoute} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {environment} from '@environment/environment';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent implements OnInit {
  artist: Artist;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef, private breakpointObserver: BreakpointObserver, private title: Title) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.artist = data.artist;
      this.title.setTitle(`${this.artist.displayName} - ${environment.appName}`);
      this.cdr.markForCheck();
    });


    const layoutChanges = this.breakpointObserver.observe([Breakpoints.HandsetPortrait]);
    layoutChanges.subscribe(res => {
      if (res.matches) {
        console.log('mobile');
      } else {
        console.log('desktop');
      }
    });
  }

  addArtistToLibrary() {

  }
}
