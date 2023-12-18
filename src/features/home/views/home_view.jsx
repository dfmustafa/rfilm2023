import React from 'react'
import useSWR from 'swr';

import { UseModal } from '../../../core/components/app_modal/hook/use_modal';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies.services';
import { getPopularTv, getTopRatedTv, getAiringTodayTv } from '../services/tv.services';

import AppCarouselSection from '../../../core/components/app_carousel_section/app_carousel_section';
import AppCard from '../../../core/components/app_card/app_card';
import AppNavbar from '../../../core/components/app_navbar/app_navbar';
import AppFooter from '../../../core/components/app_footer/app_footer';
import AppModal from '../../../core/components/app_modal/app_modal';

const HomeView = () => {

  const {isOpen, openModal, closeModal} = UseModal();

  const {data: popularMovies, error: popularMoviewError, isLoading: popularMoviesLoading 
  } = useSWR('popularMovies', getPopularMovies);

  const { data: topRatedMovies, error: topRatedMoviewError, isLoading: topRatedMoviesLoading
  } = useSWR('topRatedMovies', getTopRatedMovies);

  const { data: upcomingMovies, error: upcomingMoviewError, isLoading: upcomingMoviesLoading
  } = useSWR('upcomingMovies', getUpcomingMovies);
 
  const { data: popularTv, error: popularTvError, isLoading: popularTvLoading
  } = useSWR('popularTv', getPopularTv);

  const { data: topRatedTv, error: topRatedTvError, isLoading: topRatedTvLoading
  } = useSWR('topRatedTv', getTopRatedTv);

  const { data: airingToday, error: airingTodayTvError, isLoading: airingTodayTvLoading
  } = useSWR('airingTodayTv', getAiringTodayTv);

  return (
    <div style={{ margin: '10px' }}>

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
      
      {/*>>>>>>>>>>MOVIES<<<<<<<<<*/}

      <AppCarouselSection 
        title={"Peliculas mejor puntuadas"} data={topRatedMovies} style={{ marginBottom: '20px' }}
      />
      <AppCarouselSection 
        title={"Peliculas populares"} data={popularMovies} style={{ marginBottom: '20px' }} 
      />  
      <AppCarouselSection 
        title={"Proximos lanzamientos"} data={upcomingMovies} style={{ marginBottom: '20px' }} 
      />  

    {/*>>>>>>>>>>SERIES<<<<<<<<<*/}

      <AppCarouselSection 
        title={"Tv populares"} data={popularTv} style={{ marginBottom: '20px' }} 
      />
      <AppCarouselSection
        title={"Tv mejor puntuadas"} data={topRatedTv} style={{ marginBottom: '20px' }}
      />
      <AppCarouselSection
        title={"En emisión hoy!"} data={airingToday} style={{ marginBottom: '20px' }}
      />

      {/*>>>>>>>>>>FOOTER<<<<<<<<<*/}

      <AppFooter />

    </div>
  )
}

export default HomeView;

/*
 <button onClick={openModal}>Open Modal</button>
        <AppModal 
          open={isOpen} 
          onClicketOut={closeModal}
        >
          <div
            style={{
              height: "300px", 
              width: "300px",
              backgroundColor: "red",
              color : "white",
             }}
              >
              <button onClick={closeModal}>Close Modal</button>
            HOLA 
          </div>
        </AppModal>
*/