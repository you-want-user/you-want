import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'custom-swiper',
  templateUrl: './custom-swiper.component.html',
  styleUrl: './custom-swiper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSwiperComponent {
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
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 4000
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  };
  ngOnInit() {
    const swiperElementConstructor = document.querySelector('swiper-container');
    Object.assign(swiperElementConstructor!, this.swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
