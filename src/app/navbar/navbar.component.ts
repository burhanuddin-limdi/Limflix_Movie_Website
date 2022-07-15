import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
@HostListener('scroll', ['$event'])
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private ss: SharedService
  ) {}
  mainCarsl = new MainCarouselComponent(this.http, this.ss);
  ngOnInit(): void {
    this.decideCarExt();
  }
  decideCarExt() {
    setTimeout(() => {
      if (this.router.url === '/tv') {
        this.ss.setCarExt('tv/popular?');
      } else {
        this.ss.setCarExt('movie/now_playing?');
      }
    }, 100);
  }
  getData() {
    setTimeout(() => {
      this.mainCarsl.getData();
    }, 110);
  }

  down = false;
}
