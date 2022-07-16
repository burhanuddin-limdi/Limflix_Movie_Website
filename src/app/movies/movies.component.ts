import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GenreListService } from '../genre-list.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { FreeMode, Navigation, Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination, FreeMode]);
import { Category } from '../category';
import { urls } from '../tmdburls';
import { ShuffleService } from '../shuffle.service';
import {config}from'../swiperConfig'

@Component({
  selector: 'app-movies',
  templateUrl: '../home/home.component.html',
  styleUrls: ['../home/home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {
  // config:SwiperOptions = {
  //   breakpoints:{
  //     1000:{
  //       slidesPerView:7
  //     }
  //   }
  // }
  constructor(
    private genreData: GenreListService,
    private shuffle: ShuffleService
  ) {}
  config=config;

  allowCont = true;
  categories: Category[] = [];
  rawDataUrl: string = urls.BASE_URL + 'genre/movie/list?' + urls.API_KEY;
  movieDataUrl: string =
    urls.BASE_URL + 'discover/movie?' + urls.API_KEY + '&with_genres=';
  ngOnInit(): void {
    this.genreData.getGenresData(
      this.rawDataUrl,
      this.categories,
      this.movieDataUrl,
      'movie'
    );
    console.log(this.categories);
    
    this.shuffle.shuffle(this.categories);
  }
}
