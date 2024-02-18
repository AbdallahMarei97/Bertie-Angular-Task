import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { MoviesObject } from './movies.interface';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  moviesList: MoviesObject[] = []
  private subscription!: Subscription
  titleFilter = new FormControl('')
  faSearch = faSearch
  totalPages: number = 10
  currentPage: number = 1

  constructor(
    public moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.moviesList = movies.results
    });
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.moviesService.getMovies(this.currentPage).subscribe((movies) => {
      this.moviesList = movies.results
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
