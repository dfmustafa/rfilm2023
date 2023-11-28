import React from 'react'

const AppTitle = ({children, ...props}) => {
  return (
    <h2 {...props}
    style=
      {{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left'       
    }}> 
    {children}
    </h2>
  )
}

export default AppTitle