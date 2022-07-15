import { Injectable } from '@angular/core';
import { urls } from './tmdburls';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NonGenreDataService {
  constructor(private http: HttpClient) {}
  categoryBase: Object[] = [
    // { name: 'Currently in theaters', urlExt: 'movie/now_playing?' },
    { name: 'Shows Airing', urlExt: 'tv/on_the_air?', type: 'tv' },
    { name: 'Top Rated Movies', urlExt: 'movie/top_rated?', type: 'movie' },
    { name: 'Trending Shows', urlExt: 'tv/popular?', type: 'tv' },
    { name: 'Trending Movies', urlExt: 'movie/popular?', type: 'movie' },
    { name: 'Top Rated Shows', urlExt: 'tv/top_rated?', type: 'tv' },
    { name: 'Coming Soon', urlExt: 'movie/upcoming?', type: 'movie' },
  ];
  urlExtns: string[] = [];
  categories: Category[] = [];

  createCategories() {
    this.categoryBase.forEach((element) => {
      var categ: Category = {
        name: element['name'],
        urlExt: element['urlExt'],
        readyUrl:
          urls.BASE_URL +
          element['urlExt'] +
          urls.API_KEY +
          urls.PAGE +
          '&adult=true',
        data: [],
        type: element['type'],
      };
      this.categories.push(categ);
    });
    this.getPosterPaths();
  }
  getPosterPaths() {
    this.categories.forEach((element) => {
      this.http.get(element.readyUrl).subscribe((resData) => {
        var results = resData['results'];
        results.forEach((ele) => {
          
            let info = {
              posterPath: urls.POSTER + ele.poster_path,
              id: ele.id,
            };
            element.data.push(info);
        
        // element.posterPaths.push(urls.POSTER + ele.poster_path);
          // element.ids.push(ele.id);
        });
      });
    });
  }
}
