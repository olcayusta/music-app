import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pause-icon',
  templateUrl: 'pause-24px.svg',
  styleUrls: ['./pause-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PauseIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
