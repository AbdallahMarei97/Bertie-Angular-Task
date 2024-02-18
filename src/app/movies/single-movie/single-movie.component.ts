import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SingleMovieObject } from '../movies.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit, OnDestroy {

  singleMovie!: SingleMovieObject
  movieId: number = 0;
  private routeSub!: Subscription;
  private subscription!: Subscription

  constructor(
    public moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.movieId = params['movieId'];
    });

    this.moviesService.getSingleMovie(this.movieId).subscribe((movie) => this.singleMovie = {...movie});
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
