import {ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth/auth.service';
import {User} from '@shared/models/user';

@Component({
  selector: 'app-avatar-popup',
  templateUrl: './avatar-popup.component.html',
  styleUrls: ['./avatar-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarPopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter();

  user: User;

  constructor(
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private snackBar: MatSnackBar
  ) {
    this.user = this.authService.currentUserValue;
  }

  ngOnInit() {
  }

  exitToaApp() {
    this.authService.signOut();
    this.snackBar.open('Oturum kapatıldı', 'KAPAT');
  }
}
