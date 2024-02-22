import { FilterMoviesPipe } from './filter-movies.pipe';

describe('FilterMoviesPipe', () => {
  let pipe: FilterMoviesPipe;

  const moviesArray = [
    {
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
      genre_ids: [1, 2, 3],
    },
    {
      title: 'Carter',
      adult: false,
      backdrop_path: 'mock image',
      poster_path: 'mock image',
      release_date: '15/3/2008',
      id: 123,
      original_language: 'english',
      original_title: 'Carter',
      video: 'mock video',
      overview: 1,
      vote_average: 1,
      vote_count: 1,
      genre_ids: [1, 2, 3],
    },
    {
      title: 'Happy',
      adult: false,
      backdrop_path: 'mock image',
      poster_path: 'mock image',
      release_date: '15/3/2008',
      id: 123,
      original_language: 'english',
      original_title: 'Happy',
      video: 'mock video',
      overview: 1,
      vote_average: 1,
      vote_count: 1,
      genre_ids: [1, 2, 3],
    }
  ]

  beforeEach(() => {
    pipe = new FilterMoviesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter movies based on title', () => {
    const filteredMovies = pipe.transform(moviesArray, 'car');

    expect(filteredMovies.length).toBe(2);
    expect(filteredMovies).toEqual([
      {
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
        genre_ids: [1, 2, 3],
      },
      {
        title: 'Carter',
        adult: false,
        backdrop_path: 'mock image',
        poster_path: 'mock image',
        release_date: '15/3/2008',
        id: 123,
        original_language: 'english',
        original_title: 'Carter',
        video: 'mock video',
        overview: 1,
        vote_average: 1,
        vote_count: 1,
        genre_ids: [1, 2, 3],
      },
    ]);
  });
});
