import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContDetailComponent } from './cont-detail/cont-detail.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: TvShowsComponent },
  { path: ':type/:id', component: ContDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
