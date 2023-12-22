import React from 'react'
import { createPortal } from 'react-dom'

const AppModalPortal = ({children, onClicketOut = ()=>{},open}) => {
  return (
    <>
    {open && createPortal(
        <div 
            onClick={(e)=>{
                console.log(" target");
                console.log(e.target);
                console.log("current target");
                console.log(e.currentTarget);
                if(e.target === e.currentTarget){
                    onClicketOut();
                }
            }}
            style= {{
                position: "fixed", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                width: "100%", 
                height: "100%",
                background: "rgba(0,0,0, 0.5)", 
                zIndex: 1000}}>
             {children}
        </div>,document.body
    )}

    </>
  )
}

export default AppModalPortal