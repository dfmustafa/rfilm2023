import axios from "axios";

export const tdmb_api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {      
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: 'es-ES', }
  });

 export const tdmb_paths = {
    nowPlaying: 'movie/now_playing',
    popular: 'movie/popular',
    topRated: 'movie/top_rated',
    upcoming: 'movie/upcoming',    
  }