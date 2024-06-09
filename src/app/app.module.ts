import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSwiperComponent } from './components/custom-swiper/custom-swiper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [AppComponent, CustomSwiperComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule {}
