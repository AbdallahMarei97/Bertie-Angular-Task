import { HttpClient } from '@angular/common/http';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  const httpClientMock = (): HttpClient => ({...httpClientSpy})

  beforeEach(() => {
    service = new MoviesService(httpClientMock())
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMovie', () => {
    it('should get movies based on page number', () => {
      const pageNumber = 1;

      service.getMovies(pageNumber)

      expect(service._httpClient.get).toHaveBeenCalled();
    });

    it('should get movies using default page number if not sent', () => {
      service.getMovies()

      expect(service._httpClient.get).toHaveBeenCalled();
    });
  });

  describe('getSingleMovie', () => {
    it('should get a single movie', () => {
      const movieId = 123;

      service.getSingleMovie(movieId)

      expect(service._httpClient.get).toHaveBeenCalled();
    });
  });

  describe('getSearchMovie', () => {
    it('should search for movie based on movie name', () => {
      const movieName = 'Inception';

      service.getSearchMovie(movieName)

      expect(service._httpClient.get).toHaveBeenCalled();
    });
  });
});