import { of } from 'rxjs';
import { mockMoviesService } from '../movies.service.mock';
import { SingleMovieComponent } from './single-movie.component';

describe('SingleMovieComponent', () => {
  let component: SingleMovieComponent;
  let activatedRouteMock: any;

  const mockMovieData = {
    title: 'Cars',
    adult: false,
    backdrop_path: 'mock image',
    poster_path: 'mock image',
    release_date: '15/3/2008',
    id: 123,
    original_language: 'english',
    original_title: 'Cars',
    video: 'mock video',
    overview: 1,
    vote_average: 1,
    vote_count: 1,
    tagline: 'mock tagline',
    status: 'mock status',
    revenue: 1,
    runtime: 1,
    popularity: 1,
    imdb_id: 'mock imdb',
    homepage: 'mock homepage',
    budget: 1,
    genres: [{id: 1, name: 'action'}],
    belongs_to_collection: {id: 1, name: 'action', backdrop_path: 'mock image', poster_path: 'mock image'},
    production_companies: [{id: 1, name: 'action', logo_path: 'mock image', origin_country: 'mock country'}],
    production_countries: [{name: 'action', english_name: 'mock image', iso_639_1: 'mock iso'}],
    spoken_languages: [{name: 'action', iso_3166_1: 'mock iso'}],
  };

  beforeEach(() => {
    activatedRouteMock = {
      params: of({ movieId: 1 }),
      subscribe: (fn: (value: any) => void) => fn({ movieId: 1 }),
    };

    component = new SingleMovieComponent(mockMoviesService(), activatedRouteMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should get the movie based on the id', () => {
      activatedRouteMock.params.subscribe((params: any) => {
        component.movieId = params.movieId;
      });
      (component.moviesService.getSingleMovie as jasmine.Spy).and.returnValue(of(mockMovieData))
      component.ngOnInit()

      expect(component.moviesService.getSingleMovie).toHaveBeenCalledWith(1);
      expect(component.singleMovie).toEqual(mockMovieData);
    });
  });

  describe('ngOnDestroy', () => {
    let mockSub: any;

    beforeEach(() => {
      mockSub = {
        unsubscribe: jasmine.createSpy('unsubscribe'),
      };
    });

    it('should unsubscribe in destroy', () => {
    component.routeSub = mockSub;

    component.ngOnDestroy();

    expect(component.routeSub.unsubscribe).toHaveBeenCalled();
    });
  });
});
