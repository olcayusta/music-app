import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGridComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;
  items = [
    {
      title: 'Kare Package',
      artist: 'IAMDDB',
      img: 'https://resources.tidal.com/images/d65ad27a/7b85/43c1/83cd/4840662c024d/1280x1280.jpg'
    },
    {
      title: 'Sophie',
      artist: 'Arlo Parks',
      img: 'https://resources.tidal.com/images/4366c931/b0b7/4183/aad9/d38f0f4b1161/1280x1280.jpg'
    },
    {
      title: 'New York City, 1986 Live EP',
      artist: 'The Smithereens',
      img: 'https://resources.tidal.com/images/e13759f5/0a2e/44e3/b3cc/57c72acb415f/1280x1280.jpg'
    },
    {
      title: 'Live at Sigma Sound',
      artist: 'The Smithereens',
      img: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg'
    },
    {
      title: 'Cold Cream',
      artist: 'Cold Cream',
      img: 'https://resources.tidal.com/images/3bce5d18/ec6b/48bc/b4d8/8de01be79d36/1280x1280.jpg'
    },
    {
      title: 'ARTS COMPILATION 2019',
      artist: 'Various Artists',
      img: 'https://resources.tidal.com/images/c08c1ce2/57eb/455b/aea4/2cd89107f4c7/1280x1280.jpg'
    },
    {
      title: 'Hoax EP',
      artist: 'L3MMY DUBZ',
      img: 'https://resources.tidal.com/images/1ca2d7c0/dc88/4d46/8a32/0b293fe534e0/1280x1280.jpg'
    },
    {
      title: 'Juicy Sonic Magic, Live in Berkeley, September 24-25, 2018',
      artist: 'The National',
      img: 'https://resources.tidal.com/images/9a2fbebd/d1fa/4ed6/86de/3a8c479df605/1280x1280.jpg'
    },
    {
      title: 'Jesus Is Born',
      artist: 'Sunday Service Choir',
      img: 'https://resources.tidal.com/images/aadbbf32/774c/4b16/b34d/05108b18f940/1280x1280.jpg'
    },
    {
      title: 'Macaco Sessions: Leo Santana (ao Vivo)',
      artist: 'Leo Santana',
      img: 'https://resources.tidal.com/images/8c55f4e4/b445/4e64/92cb/aaf0d9c18b01/1280x1280.jpg'
    },
    {
      title: 'Sinais Sessions - Morro Da Urca 2 (Ao Vivo)',
      artist: 'Di Ferrero',
      img: 'https://resources.tidal.com/images/78fdc7c9/1553/4284/8a6b/19ea60ad9454/1280x1280.jpg'
    },
    {
      title: 'Start',
      artist: 'Lipe Lucena',
      img: 'https://resources.tidal.com/images/10cce82b/15dc/4a90/86b3/c2b4015c7787/1280x1280.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
