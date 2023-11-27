import React from 'react'
import { useAuth } from '../hook/use_auth';
import { redirectDocument, Navigate } from 'react-router-dom';

const Privateoute = ({children}) => {

const {isLoggedIn} = useAuth();


if(isLoggedIn) return children;

  return <Navigate to="/login"/>
}

export default Privateoute;