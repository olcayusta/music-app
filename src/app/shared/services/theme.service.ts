import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme$: BehaviorSubject<boolean>;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const theme = !!localStorage.getItem('DARK_THEME');
    this.theme$ = new BehaviorSubject<boolean>(!!localStorage.getItem('DARK_THEME'));
  }

  setDarkStatus(status: boolean) {
    this.theme$.next(status);
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    const themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
}
