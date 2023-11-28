import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../../../core/components/app_button/app_button';
import { AppSwiper } from '../../../core/components/app_swiper/components/app_swiper';
import  AppSwiperSlide  from '../../../core/components/app_swiper/components/app_swiper_slide';
import { getPopularMovies } from '../services/movies.services';
import useSWR from 'swr';
const HomeView = () => {

  const {logout} = useAuth();

  getPopularMovies()
  const {data} = useSWR('popularMovies', getPopularMovies);
console.log('data',data);

  return (
    <div>
      <h1>Peliculas populares</h1>  

      <AppSwiper>
   
        {data?.map((e, index) => (
          <AppSwiperSlide key={index}>
            
              <div 
                style={{ 
                width: 250, 
                height: 150,
                backgroundColor: 'red',
                backgroundImage: `url(${e.backdrop})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                }} 
              > 
                <h3 style={{color: 'white',backgroundColor: 'GrayText'}}> {e.title}</h3>
              </div>
            
          </AppSwiperSlide>
        ))}
      
      </AppSwiper>
    
      <AppButton onClick={logout}>Logout</AppButton>      
   
    </div>
  )
}

export default HomeView;

/*
*/