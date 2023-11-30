import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import '@fontsource/roboto';  
import { useAuth } from '../../auth/hook/use_auth';
export default function AppNavbar() {
  
  const {logout} = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#000' }}>
        <Toolbar >
        <LiveTvIcon sx={{ fontSize: 40, color: 'red', marginRight: 1 }} />
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: 'red', fontWeight: 'bold'  }}>
            REACT FILM
          </Typography>
          <Button onClick={logout}
            variant="outlined"
            color="error"
            sx={{ marginLeft: 2 }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}