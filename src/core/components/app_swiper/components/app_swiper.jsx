import { useRef, useEffect } from 'react';
import AppSwiperSlide from './app_swiper_slide';

export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="5"     
      loop
      navigation="true"  
    >
      {children}
    </swiper-container>        
  );
};