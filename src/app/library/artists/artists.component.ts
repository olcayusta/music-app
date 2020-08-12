import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists = [
    {
      img: 'https://resources.tidal.com/images/abde8987/b71f/4a7a/a42f/349c313d916b/320x320.jpg'
    },
    {
      img: 'https://resources.tidal.com/images/27ea60bc/cb1b/49a4/8d6c/a0876445d5f8/320x320.jpg'
    },
    {
      img: 'https://resources.tidal.com/images/b9cbb995/c8f7/4b48/a0ac/3ced8461afe7/320x320.jpg'
    },
    {
      img: 'https://resources.tidal.com/images/0c1e2c95/3011/431b/b9d1/881a9e3e3102/320x320.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
