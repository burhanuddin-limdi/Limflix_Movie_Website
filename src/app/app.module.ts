import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VidBgComponent } from './vid-bg/vid-bg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ContDetailComponent } from './cont-detail/cont-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    VidBgComponent,
    NavbarComponent,
    CarouselComponent,
    MoviesComponent,
    HomeComponent,
    TvShowsComponent,
    MainCarouselComponent,
    ContDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
