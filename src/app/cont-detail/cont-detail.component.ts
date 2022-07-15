import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../tmdburls';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cont-detail',
  templateUrl: './cont-detail.component.html',
  styleUrls: ['./cont-detail.component.css'],
})
export class ContDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  type = this.route.snapshot.paramMap.get('type');
  id = this.route.snapshot.paramMap.get('id');
  mainInfo: object = {};
  poster;
  posterPaths = [];
  info: object[] = [];
  ngOnInit(): void {
    
    this.getData();
    this.getSimilar();
    this.getAllSim();
  }
  getData() {
    this.http
      .get(urls.BASE_URL + this.type + '/' + this.id + '?' + urls.API_KEY)
      .subscribe((resData) => {
        this.mainInfo = resData;
        this.poster = urls.POSTER + this.mainInfo['backdrop_path'];
        this.duration = this.timeConvert(this.mainInfo['runtime']);
      });
  }
  totalPages: number = null;
  getSimilar() {
    this.http
      .get(
        urls.BASE_URL +
          this.type +
          '/' +
          this.id +
          '/similar?' +
          urls.API_KEY +
          '&page=' +
          '1'
      )
      .subscribe((res) => {
        // console.log(res);
        this.totalPages = res['total_pages'];
        // console.log(this.totalPages);
        for (let i = 1; i <= 10; i++) {
          this.http
            .get(
              urls.BASE_URL +
                this.type +
                '/' +
                this.id +
                '/similar?' +
                urls.API_KEY +
                '&page=' +
                i.toString()
            )
            .subscribe((res) => {
              res['results'].forEach((ele) => {
                this.posterPaths.push(urls.POSTER + ele.poster_path);
                let info = {
                  posterPath: urls.POSTER + ele.poster_path,
                  id: ele.id,
                };
                this.info.push(info);
              });
            });
        }
        console.log(this.posterPaths);
        // res['results'].forEach((ele) => {
        //   this.posterPaths.push(urls.POSTER + ele.poster_path);
        // });
      });
  }
  duration;
  getAllSim() {
    console.log(this.totalPages);
  }
  timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + 'hr ' + rminutes + 'min';
  }
}
