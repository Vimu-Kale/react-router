import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';


const ResponsiveAppBar = () => {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleUserList = () =>{
    navigate('/')
    handleCloseNavMenu();
  }

  const handleUserDetailsForm = () =>{
    navigate('/userdetailsform')
    handleCloseNavMenu();
  }
  const handleCollege = () =>{
    navigate('/college')
    handleCloseNavMenu();
  }



  return (
    <AppBar position="sticky" style={{backgroundColor:"#4285F4", color:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow:25, display: { xs: 'none', md: 'flex' ,} }}
          >
            MindBowser
          </Typography>
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            MindBowser
          </Typography>
          
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem key={1} onClick={()=>{handleUserList()}}>
                  <Typography textAlign="center">User List</Typography>
                </MenuItem>
                <MenuItem key={2} onClick={()=>{handleUserDetailsForm()}}>
                <Typography textAlign="center">User Form</Typography>
              </MenuItem>
              <MenuItem key={3} onClick={()=>{handleCollege()}}>
              <Typography textAlign="center">College</Typography>
            </MenuItem>
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md:"flex" } }}>
           
              <Button
                key={1}
                onClick={handleUserList}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                User List
              </Button>
              <Button
                key={2}
                onClick={handleUserDetailsForm}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                User Form
              </Button>
              <Button
                key={3}
                onClick={handleCollege}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                College
              </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
