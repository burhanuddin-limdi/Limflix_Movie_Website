import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { FreeMode, Navigation, Pagination, SwiperOptions } from 'swiper';
import { urls } from '../tmdburls';
import { NonGenreDataService } from '../non-genre-data.service';
import {config}from'../swiperConfig'
SwiperCore.use([Navigation, Pagination, FreeMode]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  // config:SwiperOptions = {
  //   breakpoints:{
  //     1000:{
  //       slidesPerView:7
  //     }
  //   }
  // }
  config=config;
  API_KEY = urls.API_KEY;
  BASE_URL = urls.BASE_URL;
  allowCont=true;
  POSTER = urls.POSTER;
  POPULARITY_LIST =
    this.BASE_URL + 'movie' + '/popular?' + this.API_KEY + '&page=1';

  constructor(private nonGenreData: NonGenreDataService) {}
  categories = this.nonGenreData.categories;
  ngOnInit(): void {
    this.nonGenreData.createCategories();
    // console.log(this.nonGenreData.categories);
    
  }
}
