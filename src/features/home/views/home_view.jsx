import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

import { UseModal } from '../../../core/components/app_modal/hook/use_modal';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies.services';
import { getPopularTv, getTopRatedTv, getAiringTodayTv } from '../services/tv.services';

import AppCarouselSection from '../../../core/components/app_carousel_section/app_carousel_section';
import AppCard from '../../../core/components/app_card/app_card';
import AppNavbar from '../../../core/components/app_navbar/app_navbar';
import AppFooter from '../../../core/components/app_footer/app_footer';
import AppModal from '../../../core/components/app_modal/app_modal';
import { red } from '@mui/material/colors';
import AppBanner from '../../../core/components/app_banner/app_banner';

const HomeView = () => {

  const {isOpen, openModal, closeModal} = UseModal();

  const {data: popularMovies, error: popularMoviewError, isLoading: isLoadingPopularMovies
  } = useSWR('popularMovies', getPopularMovies);

  const { data: topRatedMovies, error: topRatedMoviewError, isLoading: isLoadinTopRatedMovies
  } = useSWR('topRatedMovies', getTopRatedMovies);

  const { data: upcomingMovies, error: upcomingMoviewError, isLoading: isLoadingUpcomingMovies
  } = useSWR('upcomingMovies', getUpcomingMovies);
 
  const { data: popularTv, error: popularTvError, isLoading: isLoadingPopularTv
  } = useSWR('popularTv', getPopularTv);

  const { data: topRatedTv, error: topRatedTvError, isLoading: isLoadingTopRatedTv
  } = useSWR('topRatedTv', getTopRatedTv);

  const { data: airingToday, error: airingTodayTvError, isLoading: isLoadingAiringTodayTv
  } = useSWR('airingTodayTv', getAiringTodayTv);

  const [dataBanner, setDataBanner] = useState(null);
  
  useEffect(() => {
    const getRandomMovieORTv = () => {

      const random = Math.random() * 10;

      if (isLoadingPopularMovies || isLoadingPopularTv) return;

      const obtenerElementoAleatorio = (array) => {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        return array[indiceAleatorio];
      };

      const elementoAleatorio = random > 5
      ?  obtenerElementoAleatorio(popularMovies)
      : obtenerElementoAleatorio(popularTv);

      return elementoAleatorio;     
    }
    
    const randomMovieOrTv= getRandomMovieORTv();
    setDataBanner(randomMovieOrTv);
      
  },[isLoadingPopularMovies, isLoadingPopularTv, popularMovies, popularTv]);
  
  return (
    <div style={{  margin: '6px'  }}>

      <AppNavbar/>

      <AppBanner data={{title: dataBanner?.title , backdrop: dataBanner?.backdrop  }} style={{ color:red }}/>
      
      {/*>>>>>>>>>>MOVIES<<<<<<<<<*/}

      <AppCarouselSection 
        title={"Peliculas mejor puntuadas>"} data={topRatedMovies}  style={{ color:red , marginTop: '40px' }}
      />
      <AppCarouselSection 
        title={"Peliculas populares>"} data={popularMovies}
      />  
      <AppCarouselSection 
        title={"Proximos lanzamientos>"} data={upcomingMovies} 
      />  

    {/*>>>>>>>>>>SERIES<<<<<<<<<*/}

      <AppCarouselSection 
        title={"Tv populares>"} data={popularTv}   style={{  marginTop: '40px' }}
      />
      <AppCarouselSection
        title={"Tv mejor puntuadas>"} data={topRatedTv} 
      />
      <AppCarouselSection
        title={"En emisión hoy!>"} data={airingToday} 
      />

      {/*>>>>>>>>>>FOOTER<<<<<<<<<*/}

      <AppFooter />

    </div>
  )
}

export default HomeView;

      







       {/*} 
      <AppCard 
        config= {{ image: { show: true} }}
        height="400px" 
        width="100%"           
        backgroundImageSrc={"https://picsum.photos/1600/400"}
        data = {""}>
        <AppCard.Header>header</AppCard.Header>
        <AppCard.Footer>footer</AppCard.Footer>
      </AppCard>   
      */}

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