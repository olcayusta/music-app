import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const seconds = Math.floor(value % 60);
    const displaySecs = (seconds < 10) ? '0' + seconds : seconds;
    const minutes = Math.floor((value / 60) % 60);
    // const displayMins = (minutes < 10) ? '0' + minutes : minutes;
    const displayMins = minutes;
    return displayMins + ':' + displaySecs;
  }

}
