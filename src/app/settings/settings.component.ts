import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '@shared/models/user';
import {AccountService} from '@shared/services/account.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  user$: Observable<User>;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.user$ = this.accountService.getAccount();
  }

}
