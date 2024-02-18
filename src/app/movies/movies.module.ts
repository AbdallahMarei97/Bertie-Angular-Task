import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { CommonModule } from '@angular/common';
import { FilterMoviesPipe } from './filter-movies.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../pagination/pagination.component';

@NgModule({
  declarations: [
    FilterMoviesPipe,
    MoviesComponent,
    PaginationComponent,
    SingleMovieComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MoviesModule { }
