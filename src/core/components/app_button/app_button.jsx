import React from 'react'

const style={
  backgroundColor: 'red',
  color: 'white',
  padding: '10px',
  borderRadius: '5px'
}
const AppButton = ({children, ...props}) => {
  return (
    <button 
      style={style} 
      { ...props}
    >
      {children}
    </button>);
};

export default AppButton;