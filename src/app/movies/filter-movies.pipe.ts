import { Pipe, PipeTransform } from '@angular/core';
import { MoviesObject } from './movies.interface';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

  transform(moviesList: MoviesObject[], title: string): MoviesObject[] {
    return moviesList.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
  }
}
