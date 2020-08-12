import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appLazyLoadImg]'
})
export class LazyLoadImgDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        const img = entries[0].target as HTMLImageElement;
        const fakeImage = new Image();
        fakeImage.src = img.dataset.src;
        fakeImage.onload = () => {
          img.src = img.dataset.src;
          img.style.opacity = '1';
        };
      }
    });

    imgObserver.observe(this.elementRef.nativeElement);
  }

}
