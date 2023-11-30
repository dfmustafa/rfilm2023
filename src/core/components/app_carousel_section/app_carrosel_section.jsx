import React from 'react'
import { AppSwiper } from '../app_swiper/components/app_swiper'
import AppSwiperSlide from '../app_swiper/components/app_swiper_slide'
import AppTitle from '../app_title/app_title'

const AppCarouselSection = ({title, data}) => {
  return (
    <>         
        <AppTitle>{title}</AppTitle>
        <AppSwiper>   
        {data?.map((e) => (
            <AppSwiperSlide key={e.id}>            
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
    </>
  )
}

export default AppCarouselSection