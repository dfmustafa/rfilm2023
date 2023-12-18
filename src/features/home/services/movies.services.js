import { tdmb_api, tmdb_paths } from "../../../core/datasources/remote/tmdb/tmdb_api"
import { tmdbMoviesTvAdapter } from "./adapters/tmdb_adapter";

export const getPopularMovies = async () =>{
    const {data} = await tdmb_api.get(tmdb_paths.movies.popular);
    const adapted =  tmdbMoviesTvAdapter(data);   
    return adapted;
}

export const getTopRatedMovies = async () =>{
    const {data} = await tdmb_api.get(tmdb_paths.movies.top_rated);
    const adapted =  tmdbMoviesTvAdapter(data);   
    return adapted;
}

export const getUpcomingMovies = async () =>{
    const {data} = await tdmb_api.get(tmdb_paths.movies.upcoming);
    const adapted =  tmdbMoviesTvAdapter(data);   
    return adapted;
}
