import {Component, OnInit, ViewChild} from '@angular/core';
import {AudioService} from '@shared/services/audio.service';
import {MatSlider, MatSliderChange} from '@angular/material/slider';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  isPaused;

  percentElapsed$;
  timeElapsed$;

  duration$;
  volume;
  currentTime;

  isSeek = false;

  isSliding;

  isMuted;

  isLoaded;

  @ViewChild('slider') slider: MatSlider;

  constructor(public audioService: AudioService, private title: Title) { }

  ngOnInit() {
    this.audioService.setAudio('//localhost:4200/assets/believe.mp3');
    this.percentElapsed$ = this.audioService.percentElapsed;
    this.timeElapsed$ = this.audioService.timeElapsed;
    this.duration$ = this.audioService.duration$;
    this.volume = this.audioService.audio.volume;

    this.audioService.onLoaded$.subscribe(value => {
      this.isLoaded = true;
    });

    this.initializeMediaSession();
  }

  initializeMediaSession() {
    if ('mediaSession' in navigator) {
      // @ts-ignore
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Unforgettable',
        artist: 'Nat King Cole',
        album: 'The Ultimate Collection (Remastered)',
        artwork: [
          { src: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg',   sizes: '96x96',   type: 'image/jpeg' },
          { src: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg', sizes: '128x128', type: 'image/jpeg' },
          { src: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg', sizes: '192x192', type: 'image/jpeg' },
          { src: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg', sizes: '256x256', type: 'image/jpeg' },
          { src: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg', sizes: '384x384', type: 'image/jpeg' },
          { src: 'https://resources.tidal.com/images/dbc8846e/3bfc/4349/afab/2b69d2a44d5e/1280x1280.jpg', sizes: '512x512', type: 'image/jpeg' },
        ]
      });

      // @ts-ignore
      navigator.mediaSession.setActionHandler('play', () => {
        this.audioService.playAudio();
      });

      // @ts-ignore
      navigator.mediaSession.setActionHandler('pause', () => {
        this.audioService.pauseAudio();
      });
    }
  }

  playPause() {
    this.title.setTitle('Dido - Thank You');
    this.isPaused = this.audioService.audio.paused;
    if (this.audioService.audio.paused) {
      this.audioService.playAudio();
    } else {
      this.audioService.pauseAudio();
    }
  }

  onVolumeInput($event: MatSliderChange) {
    this.audioService.audio.volume = $event.value;
    localStorage.setItem('VOLUME', $event.value.toString());
  }

  onInputChange($event: MatSliderChange) {
    this.isSeek = true;
    // this.audioService.audio.currentTime = $event.value;
    console.log(this.slider._isSliding);
    this.isSliding = this.slider._isActive;

  }

  valueChange($event: MatSliderChange) {
    this.isSeek = false;
    this.audioService.audio.currentTime = $event.value;
  }

  slideEnd() {
    console.log('end');
  }

  muteUnmute() {
    this.audioService.audio.muted = !this.audioService.audio.muted;
    this.isMuted = this.audioService.audio.muted;
  }
}
