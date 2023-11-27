import React, { useState } from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const LoginView = (e) => {
 
  const { login, isLoggedIn } = useAuth();
const handleSubmit= (e)=>{
    e.preventDefault();

    console.log(e);
    const form = e.target;
    const formData = new FormData(form);
    const {usuario,password}= Object.fromEntries(formData.entries());

    login(usuario, password);
  }
  return (
    <div>
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default LoginView;