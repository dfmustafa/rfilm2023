import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

const AppBanner = ({ data }) => {
  return (
    <Card 
     sx={{
        backgroundColor: '#242424', // Cambia al color de fondo deseado
        color: 'rgba(255, 255, 255, 0.9)', // Cambia al color de texto deseado
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left', // Centra los elementos horizontalmente
        padding: '15px', // Ajusta el espaciado interior
      }}
    >
      <CardMedia
        component="img"
        height="400px"
        width="100%"  
        image={data?.backdrop}
        alt="Banner Image"
      />
      <CardHeader title={data?.title} />
      <CardContent>
       description
      </CardContent>
      <CardActions sx={{ alignSelf: 'flex-start', paddingLeft: 2 }}>
        <Button size="small" color='primary' style={{ color: '#fff', backgroundColor: '#e50914' }}>+</Button>
      </CardActions>
      <Typography variant="body2" color="text.secondary">
        
      </Typography>
    </Card>
  );
};

export default AppBanner;