import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../../../core/components/app_button/app_button';
import { AppSwiper } from '../../../core/components/app_swiper/components/app_swiper';
import  AppSwiperSlide  from '../../../core/components/app_swiper/components/app_swiper_slide';
import { getPopularMovies, getTopRatedMovies } from '../services/movies.services';
import useSWR from 'swr';
import AppCarouselSection from '../../../core/components/app_carousel_section/app_carrosel_section';
import AppCard from '../../../core/components/app_card/app_card';
const HomeView = () => {

  const {logout} = useAuth();

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
     <AppButton onClick={logout}>Logout</AppButton>     
     <AppCarouselSection title={"Peliculas mejor puntuadas"} data={topRatedMovies} />    
     <AppCarouselSection title={"Peliculas populares"} data={popularMovies} />     
    
    <AppCard 
      config= {{
        image: {
          show: true
        }
      }} 
      width="250px" 
      height="150px" 
      backgroundImageSrc={"https://picsum.photos/250/150"}
      data = {""}>
     <AppCard.Header>header</AppCard.Header>
     <AppCard.Body>body</AppCard.Body>
     <AppCard.Footer>footer</AppCard.Footer>
    </AppCard>

    </div>
  )
}

export default HomeView;

/*
*/