import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
export default function AppFooter() {

  const currentYear = new Date().getFullYear();

  return (
    <div>
     
       <AppBar position="static" sx={{ top: 'auto', bottom: 0, background: '#242424', marginTop: '20px',  boxShadow: 'none' }} >
        <Toolbar>                   
          <Box sx={{ flexGrow: 1 }} /> 
          <div>REACT FILM ©{currentYear}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
