import React ,{useState} from 'react'
import useHover from '../../../hooks/useHover';
import { useCardContext } from '../provider/card_context';

const Header = ({children, ...props}) => {

 //const [isHovered, hoverHandlers ] = useHover();
 const { isHovered } = useCardContext();
  
  return (   
    <section     
      {...props} 
      style={{ 
        padding : "10px" , 
        borderBottom : "1px solid #ccc",
        backdropFilter : "blur(2px)", 
        opacity : isHovered ? 1 : 0,
        transform : isHovered ? "translateY(0)" : "translateY(-10px)",
        transition : "all 0.2s ease-in-out",
        ...props.style      
      }}>
      {children}
    </section>
  )
};

export default Header;