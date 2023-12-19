import React from 'react'
import { sizes , colors} from '../../constants'
const AppTitle = ({children, size=sizes.sm, micolor=colors.white, ...props}) => {
  return (
    <h2 {...props}
    style=
      {{
        fontSize: size,
        fontWeight: 'bold',       
        margin: "0 0 0.5rem 0",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        ...props.style,
       marginBottom: '10px' ,
       color: micolor     
    }}> 
    {children}
    </h2>
  )
}

export default AppTitle