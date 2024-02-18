export interface MoviesInterface {
    page: number;
    total_page: number;
    total_results: number;
    results: MoviesObject[];
}

export interface MoviesObject {
    adult: boolean;
    backdrop_path: string;
    title: string;
    poster_path: string;
    release_date: string;
    id: number;
    original_language: string;
    original_title: string;
    video: string;
    overview: number;
    vote_average: number;
    vote_count: number;
    genre_ids: number[]
}

export interface SingleMovieObject extends Omit<MoviesObject, 'genre_ids'> {
    tagline: string;
    status: string;
    revenue: number;
    runtime: number;
    popularity: number;
    imdb_id: string;
    homepage: string;
    budget: number;
    genres: MovieGenres[];
    belongs_to_collection: BelongsToCollection;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    spoken_languages: SpokenLanguages[];
}

interface SpokenLanguages {
    name: string;
    iso_3166_1: string;
}

interface ProductionCountries {
    name: string;
    english_name: string;
    iso_639_1: string;
}

interface MovieGenres {
    id: number;
    name: string;
}

interface BelongsToCollection extends MovieGenres {
    backdrop_path: string;
    poster_path: string;
}

interface ProductionCompanies extends MovieGenres {
    logo_path: string;
    origin_country: string;
}