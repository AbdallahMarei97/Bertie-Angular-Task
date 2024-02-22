import { MoviesComponent } from './movies.component';
import { mockMoviesService } from './movies.service.mock';
import { of } from 'rxjs';

describe('MoviesComponent', () => {
  let component: MoviesComponent;

  beforeEach(() => {
    component = new MoviesComponent(mockMoviesService());
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getMovies and get all movies for the home page', () => {
      const mockData = {
        results: []
      };

      (component.moviesService.getMovies as jasmine.Spy).and.returnValue(of(mockData))
      component.ngOnInit();

      expect(component.moviesService.getMovies).toHaveBeenCalled();
      expect(component.moviesList).toEqual(mockData.results);
    });
  });

  describe('changePage', () => {
    it('should get movies based on what page we currently on', () => {
      const mockData = {
        results: []
      };

      (component.moviesService.getMovies as jasmine.Spy).and.returnValue(of(mockData))
      component.changePage(2);

      expect(component.moviesService.getMovies).toHaveBeenCalledWith(2);
      expect(component.moviesList).toEqual(mockData.results);
    });
  });

  describe('searchAllMovies', () => {
    it('should get movie based on what the user searched for', () => {
      const mockData = {
        results: []
      };
      component.titleFetch = 'mock movie';

      (component.moviesService.getSearchMovie as jasmine.Spy).and.returnValue(of(mockData))
      component.searchAllMovies();

      expect(component.moviesService.getSearchMovie).toHaveBeenCalledWith(component.titleFetch);
      expect(component.moviesList).toEqual(mockData.results);
    });
  });
});
