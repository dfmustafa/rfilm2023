import React from 'react'
import { sizes } from '../../constants'
const AppTitle = ({children,size=sizes.sm, ...props}) => {
  return (
    <h2 {...props}
    style=
      {{
        fontSize: size,
        fontWeight: 'bold',
        color: 'white',
        margin: "0 0 0.5rem 0",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        ...props.style,
       marginBottom: '10px' ,
     
    }}> 
    {children}
    </h2>
  )
}

export default AppTitle