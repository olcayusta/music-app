import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {AuthService} from '../auth/auth.service';
import {User} from '@shared/models/user';
import {fromEvent, Subscription} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoggedIn = false;

  @Output() openSidenav = new EventEmitter();

  user: User;
  isLoggedIn$;

  popupOpened = false;
  scrollStrategy;
  avatarUrl = 'https://lh3.googleusercontent.com/3ED-EIzmg-nmqSzSHCT4yxTNEnjvfeXW29Uhzxo-JvrYsm9XdLEKE3N4aOBOVDjE3CryDrV5CXYrRBc=w60-h60-l90-rj';

  prevScrollPos;

  scrollSubscription: Subscription;
  layoutChangesSubscription: Subscription;

  @ViewChild('topBar', {static: true, read: ElementRef}) topBar: ElementRef;

  constructor(private authService: AuthService,
              private overlay: Overlay, private router: Router,
              private location: Location,
              private breakpointObserver: BreakpointObserver, private renderer: Renderer2) {
    // this.isLoggedIn$ = this.authService.currentUser;
    this.scrollStrategy = overlay.scrollStrategies.block();
    this.user = this.authService.currentUserValue;
  }

  ngOnInit() {

    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if (this.router.url.includes('/artist/')) {
          this.renderer.addClass(this.topBar.nativeElement, 'hide');
        } else {
          this.renderer.removeClass(this.topBar.nativeElement, 'hide');
        }
      }
    });

    const layoutChanges = this.breakpointObserver.observe([Breakpoints.HandsetPortrait]);
    layoutChanges.subscribe(res => {
      if (res.matches) {

 /*       const scroll$ = fromEvent(window, 'scroll');
        this.scrollSubscription = scroll$.subscribe(value => {
          const currentScrollPos = window.pageYOffset;

          if ((this.prevScrollPos > currentScrollPos)) {
            this.renderer.removeClass(this.topBar.nativeElement, 'hide');
          } else if (window.pageYOffset > 56) {
            this.renderer.addClass(this.topBar.nativeElement, 'hide');
          }

          this.prevScrollPos = currentScrollPos;
        });*/


      } else {
        this.renderer.removeClass(this.topBar.nativeElement, 'hide');
        if (this.scrollSubscription) {
          this.scrollSubscription.unsubscribe();
        }
      }
    });
  }

  avatarButtonClick() {
    this.popupOpened = !this.popupOpened;
  }

  outsideClicked() {
    this.popupOpened = false;
  }
}
