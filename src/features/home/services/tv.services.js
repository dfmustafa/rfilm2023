import { tdmb_api, tmdb_paths } from "../../../core/datasources/remote/tmdb/tmdb_api"
import { tmdbMoviesTvAdapter } from "./adapters/tmdb_adapter";

export const getPopularTv = async () =>{
    const {data} = await tdmb_api.get(tmdb_paths.tv.popular);
    const adapted =  tmdbMoviesTvAdapter(data);   
    return adapted;
}

export const getTopRatedTv = async () =>{
    const {data} = await tdmb_api.get(tmdb_paths.tv.top_rated);
    const adapted =  tmdbMoviesTvAdapter(data);   
    return adapted;
}

export const getAiringTodayTv = async () =>{
    const {data} = await tdmb_api.get(tmdb_paths.tv.airing_today);
    const adapted =  tmdbMoviesTvAdapter(data);   
    return adapted;
}
