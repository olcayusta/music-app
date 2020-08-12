import {Component, Inject, OnInit} from '@angular/core';
import {ThemeService} from '@shared/services/theme.service';
import {DOCUMENT} from '@angular/common';
import {ResolveEnd, ResolveStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'music-app';
  spinner = false;

  progress = 0;

  constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService, private router: Router) {
    this.router.events.subscribe(value => {
      if (value instanceof ResolveStart) {
        this.spinner = true;
      }

      if (value instanceof ResolveEnd) {
        this.spinner = false;
      }
    });
  }

  ngOnInit(): void {
/*    setInterval(() => {
      this.progress = this.progress + 0.10;

    }, 8);*/
/*    this.themeService.theme$.subscribe((value) => {
      if (value) {
        this.themeService.loadStyle('dark.css');
        const metaThemeColor = this.document.querySelector('meta[name=theme-color]');
        metaThemeColor.setAttribute('content', '#272727');
      } else {
        this.themeService.loadStyle('light.css');
        const metaThemeColor = this.document.querySelector('meta[name=theme-color]');
        metaThemeColor.setAttribute('content', '#fff');
      }
    });*/
  }
}
