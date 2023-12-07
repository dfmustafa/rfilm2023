import { useRef, useEffect, useState } from 'react';
import AppSwiperSlide from './app_swiper_slide';

export const AppSwiper = ({children}) => {

  const [slidersPerView, setSlidersPerView] = useState(4);

  useEffect (() => {
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        setSlidersPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidersPerView(2);
      } else if (window.innerWidth < 1280) {
        setSlidersPerView(3);
      } else {
        setSlidersPerView(4);
      }
    }
    console.log(window.innerWidth);
    window.addEventListener('resize',resizeHandler);

    return () => {
      window.removeEventListener('resize',resizeHandler);
    }

  }, []);

  const swiperElRef = useRef(null);

  return (
    <swiper-container
      loop
      ref={swiperElRef}
      slides-per-view= {slidersPerView}
      navigation="true"   
    >
      {children}
    </swiper-container>        
  );
};