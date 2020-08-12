import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PauseIconComponent} from './pause-icon/pause-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { LibraryMusicIconComponent } from './library-music-icon/library-music-icon.component';

@NgModule({
  declarations: [PauseIconComponent, HomeIconComponent, LibraryMusicIconComponent],
  exports: [
    PauseIconComponent,
    HomeIconComponent,
    LibraryMusicIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule {
}
