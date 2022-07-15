import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';
import { urls } from '../tmdburls';
import { GenreListService } from '../genre-list.service';
import {NonGenreDataService} from '../non-genre-data.service'
SwiperCore.use([Navigation, Pagination, FreeMode]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  posterSrc: string[] = [];

  API_KEY = urls.API_KEY;
  BASE_URL = urls.BASE_URL;

  POSTER = urls.POSTER;
  POPULARITY_LIST =
    this.BASE_URL + 'movie' + '/popular?' + this.API_KEY + '&page=1';
  

  constructor(private http: HttpClient,private genreData:GenreListService,private nonGenreData:NonGenreDataService) {}
categories=this.nonGenreData.categories;
  ngOnInit(): void {
    console.log(this.POPULARITY_LIST);
    this.getData();
    // this.genreData.getGenresData();
    // this.nonGenreData.createUrls();
    // this.nonGenreData.createCategories();
    
    
    
  }
  getData() {
    this.http.get(this.POPULARITY_LIST).subscribe((resData) => {
      var results = resData['results'];
      results.forEach((element) => {
        this.posterSrc.push(this.POSTER + element.poster_path);
      });
    });
  }
  
}
