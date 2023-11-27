import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const HomeView = () => {

  const {isLoggedIn, logout} = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
    <h1>HOME VIEW</h1>    
    <button onClick={logout}>Logout</button>
  </div>
  )
}

export default HomeView;

/*
*/