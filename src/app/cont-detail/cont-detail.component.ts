import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../tmdburls';
@Component({
  selector: 'app-cont-detail',
  templateUrl: './cont-detail.component.html',
  styleUrls: ['./cont-detail.component.css'],
})
export class ContDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  type = this.route.snapshot.paramMap.get('type');
  id = this.route.snapshot.paramMap.get('id');
  mainInfo: object = {};
  poster;
  posterPaths = [];
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('type'));
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getData();
    this.getSimilar();
    this.getAllSim();
  }
  getData() {
    this.http
      .get(urls.BASE_URL + this.type + '/' + this.id + '?' + urls.API_KEY)
      .subscribe((resData) => {
        console.log(resData);
        this.mainInfo = resData;
        this.poster = urls.POSTER + this.mainInfo['backdrop_path'];
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
        for (let i = 1; i <=10; i++) {
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
              });
            });
        }
        console.log(this.posterPaths);
        // res['results'].forEach((ele) => {
        //   this.posterPaths.push(urls.POSTER + ele.poster_path);
        // });
      });
  }
  getAllSim() {
console.log(this.totalPages);

    
  }
}
// function timeConvert(n) {
//   var num = n;
//   var hours = (num / 60);
//   var rhours = Math.floor(hours);
//   var minutes = (hours - rhours) * 60;
//   var rminutes = Math.round(minutes);
//   return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
//   }
  
//   console.log(timeConvert(200));
  