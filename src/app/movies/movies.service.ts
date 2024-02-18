import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesInterface, SingleMovieObject } from './movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesApiUrl: string = `https://api.themoviedb.org/3/movie/popular?api_key=14230396e998f237b81842b1d8a58e3e&page=1`;

  constructor(
    public _httpClient: HttpClient,
  ) { }

  getMovies(pageNumber: number = 1): Observable<MoviesInterface> {
    return this._httpClient.get<MoviesInterface>(`https://api.themoviedb.org/3/movie/popular?api_key=14230396e998f237b81842b1d8a58e3e&page=${pageNumber}`);
  };

  getSingleMovie(movieId: number): Observable<SingleMovieObject> {
    return this._httpClient.get<SingleMovieObject>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=14230396e998f237b81842b1d8a58e3e`);
  };
}
