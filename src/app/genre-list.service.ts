import { Injectable } from '@angular/core';
import { urls } from './tmdburls';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class GenreListService {

  constructor(private http:HttpClient) {}
  
  
  getGenresData(rawUrl:string,categories:Category[],movieUrl:string,type:string){
    this.http.get(rawUrl).subscribe((resData)=>{
      var genres = resData['genres'];
     genres.forEach((element)=>{
      var categ:Category={
        name:element.name,
        urlExt:(element.id).toString(),
        readyUrl:movieUrl+ (element.id).toString(),
        data:[],
        type:type
      }
      categories.push(categ)
     })
    this.getPosterPaths(categories);
     
      
      
    })
  }
  getPosterPaths(categories:Category[]) {
    categories.forEach((element) => {
      this.http.get(element.readyUrl).subscribe((resData) => {
        var results = resData['results'];
        results.forEach((ele) => {
          let info = {
            posterPath: urls.POSTER + ele.poster_path,
            id: ele.id,
          };
          element.data.push(info);
        });
      });
    });
  }
}
// urls.BASE_URL+'discover/movie?'+urls.API_KEY+'&with_genres='