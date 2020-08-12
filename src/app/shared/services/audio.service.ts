import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audio: HTMLAudioElement;
  public timeElapsed: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percentElapsed: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  duration$ = new Subject();

  loadedStream: Subject<boolean> = new Subject();
  onLoaded$ = this.loadedStream.asObservable();

  constructor() {
    this.audio = new Audio();
    this.audio.volume = parseInt(localStorage.getItem('VOLUME'), 10) || 0.5;

    this.audio.onloadeddata = ev => {
      this.loadedStream.next(true);
    };
  }

  setAudio(src: string) {
    this.audio.src = src;
    // this.playAudio();

    this.audio.onloadedmetadata = () => {
      this.duration$.next(Math.round(this.audio.duration));
    };
  }

  playAudio() {
    this.audio.play();
    this.audio.ontimeupdate = ev => {
      this.calculateTime(ev);
      this.percentElapsed.next(Math.floor(this.audio.currentTime));
    };
  }

  pauseAudio() {
    this.audio.pause();
  }

  /**
   * This formats the audio's elapsed time into a human readable format, could be refactored into a Pipe.
   * It takes the audio track's "currentTime" property as an argument. It is called from the, calulateTime method.
   * @param ct
   */
  private setTimeElapsed(ct: number): void {
    const seconds = Math.floor(ct % 60);
    const displaySecs = (seconds < 10) ? '0' + seconds : seconds;
    const minutes = Math.floor((ct / 60) % 60);
    const displayMins = (minutes < 10) ? '0' + minutes : minutes;

    this.timeElapsed.next(displayMins + ':' + displaySecs);
  }

  calculateTime(e) {
    const ct = this.audio.currentTime;
    const d = this.audio.duration;
    this.setTimeElapsed(ct);
    this.setPercentElapsed(d, ct);
  }

  currentTime() {
    return this.audio.currentTime;
  }

  setPercentElapsed(d: number, ct: number) {
    this.percentElapsed.next((Math.floor((100 / d) * ct)) || 0);
  }
}
