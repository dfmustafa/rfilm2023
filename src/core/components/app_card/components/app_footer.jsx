import React from 'react'

const Footer = ({children, ...props}) => {
  return (
    <section {...props}>{children}</section>
  )
};

export default Footer;