import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppButton from '../../../core/components/app_button/app_button';
import { AppSwiper } from '../../../core/components/app_swiper/components/app_swiper';
import  AppSwiperSlide  from '../../../core/components/app_swiper/components/app_swiper_slide';

const HomeView = () => {

  const {isLoggedIn, logout} = useAuth();

  console.log(import.meta.env.VITE_TMDB_API_KEY);
  
  const showAlert = () => {
    alert('alerta');
  }

  return (
    <div>
      <h1>HOME VIEW</h1>  

      <AppSwiper>
   
        {Array.from({ length: 10 }).map((_, index) => (
          <AppSwiperSlide key={index}>
            <div>
              <div style={{ width: 250, height: 150, backgroundColor: 'red' }} /> 
              <h3> {index + 1}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      
      </AppSwiper>

      <AppButton onClick={showAlert}>alerta</AppButton>  
    
      <AppButton onClick={logout}>Logout</AppButton>      
   
    </div>
  )
}

export default HomeView;

/*
*/