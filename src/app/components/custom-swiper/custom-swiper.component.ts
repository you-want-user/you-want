import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'custom-swiper',
  templateUrl: './custom-swiper.component.html',
  styleUrl: './custom-swiper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSwiperComponent {

  @Output() imageSelected = new EventEmitter<string>();

  swiperElement = signal<SwiperContainer | null>(null);
  swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    effect: 'coverflow',
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    centeredSlides: true,
    coverflowEffect:{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    }
  };
  photos = [
    {id: 1, url: '/assets/images/image.png'},
    {id: 2, url: '/assets/images/image.png'},
    {id: 3, url: '/assets/images/image.png'},
    {id: 4, url: '/assets/images/image.png'},
    {id: 5, url: '/assets/images/image.png'},
    {id: 6, url: '/assets/images/image.png'},
    {id: 7, url: '/assets/images/image.png'},
    {id: 8, url: '/assets/images/image.png'},
    {id: 9, url: '/assets/images/image.png'},
    {id: 10, url: '/assets/images/image.png'},
  ];

  onSelectedImage(image: string) {
    this.imageSelected.emit(image);
  }
  ngOnInit() {
    const swiperElementConstructor = document.querySelector('swiper-container');
    Object.assign(swiperElementConstructor!, this.swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
