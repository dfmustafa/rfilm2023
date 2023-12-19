import React from 'react'
import { AppSwiper } from '../app_swiper/components/app_swiper'
import AppSwiperSlide from '../app_swiper/components/app_swiper_slide'
import AppTitle from '../app_title/app_title'
import AppCard from '../app_card/app_card'
import { sizes, colors } from '../../constants'

const AppCarouselSection = ({title, data, style  }) => {
  return (
    <div className="app-carousel-section" style={style}>  
        <AppTitle size={sizes.lg} micolor={colors.red}>{title}</AppTitle>
        <AppSwiper>   
        {data?.map((e) => (
            <AppSwiperSlide key={e.id} style={{ margin: '10px' }}>  
              <AppCard 
                  config= {{ image: { show: true} }}
                  height="150px" 
                  width="300px"                   
                  backgroundImageSrc={e.backdrop}
                  data = {""}                  
                  >
                <AppCard.Header>
                  <AppTitle  size={sizes.sm} micolor={colors.white}> { e.title}</AppTitle>
                </AppCard.Header>
                <AppCard.Footer>footer</AppCard.Footer>
               
              </AppCard>    
              <div
               style={{
                  textAlign: 'left',
                  paddingLeft: '5px', 
                  marginleft: '10px',                 
                  marginRight: '5px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  margin: '0 0 0.5rem 0',
                  overflowWrap: 'break-word' }}
              >
                {e.title}
              </div>       
            </AppSwiperSlide>           
        ))}      
        </AppSwiper>
        </div>
  )
}

export default AppCarouselSection

/*

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
            </AppSwiperSlide>   */