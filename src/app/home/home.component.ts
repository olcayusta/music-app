import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {
      img: 'https://resources.tidal.com/images/d3167966/9c84/4163/9cca/a5a80f36abdf/320x320.jpg',
      title: 'Rap Hits',
      subtitle: 'Created by TIDAL'
    },
    {
      img: 'https://resources.tidal.com/images/6ded97a7/a6b7/4e23/9a58/1b461adb5b75/320x320.jpg',
      title: 'Pop Hits',
      subtitle: 'Created by TIDAL'
    },
    {
      img: 'https://resources.tidal.com/images/983428f0/90b0/492e/b269/aa4327168c14/320x320.jpg',
      title: 'Rock Hits',
      subtitle: 'Created by TIDAL'
    },
    {
      img: 'https://resources.tidal.com/images/8ca13070/8e2e/4970/a0d3/54351e8eabe8/320x320.jpg',
      title: 'Indie Hits',
      subtitle: 'Created by TIDAL'
    },
    {
      img: 'https://resources.tidal.com/images/157b3d89/3a22/44e8/b064/047c93c5c30d/320x320.jpg',
      title: 'Urbano Hits',
      subtitle: 'Created by TIDAL'
    },
    {
      img: 'https://resources.tidal.com/images/23c6f15b/2721/4a7f/9a86/79ef0467e918/320x320.jpg',
      title: 'Thoro  Hip-Hop',
      subtitle: 'Created by TIDAL'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
