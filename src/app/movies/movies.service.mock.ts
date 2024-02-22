import { MoviesService } from "./movies.service";

export function mockMoviesService(): MoviesService {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    return {
        _httpClient: httpClientSpy,

        getMovies: jasmine.createSpy('getMovies'),
        getSingleMovie: jasmine.createSpy('getSingleMovie'),
        getSearchMovie: jasmine.createSpy('getSearchMovie'),
    };
}