import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../tmdburls';
import { SharedService } from '../shared.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination, FreeMode]);

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainCarouselComponent implements OnInit {
  constructor(private http: HttpClient, private ss:SharedService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getData();
    }, 110);
    
  }
  posterPaths = [];
  carExt:string
  getData() {
    this.carExt=this.ss.getCarExt();
    this.posterPaths=[];
    this.http
      .get(
        urls.BASE_URL +
          this.carExt +
          urls.API_KEY +
          urls.PAGE +
          '&adult=true'
      )
      .subscribe((resData) => {
        resData['results'].forEach((ele) => {
          this.posterPaths.push(urls.POSTER + ele.backdrop_path);
        });
      });
  }
}
