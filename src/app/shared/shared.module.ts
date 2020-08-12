import { NgModule } from '@angular/core';
import {LazyLoadImgDirective} from '@shared/directives/lazy-load-img.directive';
import { OutsideClickDirective } from './directives/outside-click.directive';



@NgModule({
  declarations: [LazyLoadImgDirective, OutsideClickDirective],
  exports: [LazyLoadImgDirective, OutsideClickDirective]
})
export class SharedModule { }
