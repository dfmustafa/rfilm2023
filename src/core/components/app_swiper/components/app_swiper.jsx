import { useRef, useEffect } from 'react';
import AppSwiperSlide from './app_swiper_slide';

export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      loop
      ref={swiperElRef}
      slides-per-view="5" 
      navigation="true"   
    >
      {children}
    </swiper-container>        
  );
};