import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
export default function AppFooter() {
  return (
    <div>
     
       <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, background: '#000' }} >
        <Toolbar>                   
          <Box sx={{ flexGrow: 1 }} />        
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
