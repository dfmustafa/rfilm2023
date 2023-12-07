import React from 'react'
import { Header, Body, Footer } from './components';
import { Provider } from './provider/card_context';
import useHover from '../../hooks/useHover';

const image = {
  show: false 
}

const defaultConfig={
  image 
};
const AppCard = ({ 
  config = defaultConfig,
  children,
  height = '150px',
  width = '300px',  
  backgroundImageSrc = undefined,
  aspectRatio = undefined,
  borderRadius = '5px',
  borderColor = "red",   
  
  ...props
  }) => {

 const [isHovered, handlers ] = useHover();

  return (
    <Provider 
      value={{
        isHovered,
    }} >
    <article    
       {...handlers}
       {...props}
      style=
        {{          
          display: 'flex',
          position: 'relative', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
          aspectRatio ,
          width ,
          height,
          overflow: 'hidden',
          borderRadius,
          borderColor,
          borderStyle: 'solid',          
          ...props.style,   
          }}
         
    >
    { config.image.show && (
      <img 
        style={{
            position: 'absolute',
            width: "100%",
             height: "100%",
            top: 0, 
            left: 0,            
            objectFit: 'cover', 
            zIndex: -1
          }}         
          src= {backgroundImageSrc}
          alt= 'imagen de pelicula'
          />)}
      {children}
    </article>
    </Provider>
  )
}

AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

export default AppCard