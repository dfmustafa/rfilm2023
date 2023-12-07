import React, { useState } from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import { Button } from '@mui/material';
import '@fontsource/roboto';  
import LiveTvIcon from '@mui/icons-material/LiveTv';

const LoginView = (e) => {
  const { login, isLoggedIn } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { usuario, password } = Object.fromEntries(formData.entries());
    login(usuario, password);
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: 'red',
      fontFamily: 'roboto,Arial, sans-serif'
    }}>
    <LiveTvIcon sx={{ fontSize: 40, color: 'red', marginRight: 1 }} />
      <h1 style={{
        fontSize: '2rem',
        marginBottom: '2rem'
      }}>REACT FILM</h1>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <input style={{
          width: '300px',
          height: '40px',
          marginBottom: '1rem',
          padding: '0.5rem',
          fontSize: '1rem'
        }} type="text" name="email" placeholder="Usuario" />
        <input style={{
          width: '300px',
          height: '40px',
          marginBottom: '1rem',
          padding: '0.5rem',
          fontSize: '1rem'
        }} type="password" name="password" placeholder="Contraseña" />
        <Button type="submit"
            variant="outlined"
            color="error"
            sx={{ marginLeft: 2 }}
          >
            Login
          </Button>
      </form>
    </div>
  );
};

export default LoginView;

/*
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

*/