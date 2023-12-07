import React from 'react'
import { getPopularMovies, getTopRatedMovies } from '../services/movies.services';
import useSWR from 'swr';
import AppCarouselSection from '../../../core/components/app_carousel_section/app_carrosel_section';
import AppCard from '../../../core/components/app_card/app_card';
import AppNavbar from '../../../core/components/app_navbar/app_navbar';
import AppFooter from '../../../core/components/app_footer/app_footer';
const HomeView = () => {

  getPopularMovies();

  const { data: popularMovies,
          error: popularMoviewError,
          isLoading: popularMoviesLoading
        } = useSWR('popularMovies', getPopularMovies);

  const { data: topRatedMovies,
          error: topRatedMoviewError,
          isLoading: topRatedMoviesLoading
        } = useSWR('topRatedMovies', getTopRatedMovies);
 
  return (
    <div>
        <AppNavbar/>   
          
        <AppCard 
          config= {{ image: { show: true} }}
          height="400px" 
          width="100%" 
          
          backgroundImageSrc={"https://picsum.photos/1600/400"}
          data = {""}>
        <AppCard.Header>header</AppCard.Header>
        <AppCard.Footer>footer</AppCard.Footer>
        </AppCard>   
        
        <AppCarouselSection title={"Peliculas mejor puntuadas"} data={topRatedMovies} />    
        <AppCarouselSection title={"Peliculas populares"} data={popularMovies} />    
              
        <AppFooter/>
   
    
    </div>
  )
}

export default HomeView;

/*
*/