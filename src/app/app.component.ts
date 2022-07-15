import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflixClone';
  constructor(){}
  onWindowScroll() {
    let element = document.querySelector('#navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
     element.classList.remove('bg-opacity-0')
      
    } else {
      
      element.classList.add('bg-opacity-0')
    
    }
  }
 
}
