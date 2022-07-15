import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
carExt:string;
  constructor() { }
  setCarExt(ext){
   this.carExt=ext;
  }
  getCarExt(){
    return this.carExt;
  }
}
