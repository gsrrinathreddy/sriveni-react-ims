import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartComp from '../cartComponent';
import Signin from '../../pages/Signin';
//import IMSAutocomplete from '../IMSAutocomplete';
import Cart from '../../pages/Cart';
import { useSelect } from '@mui/base';
import { Grid, TextField } from '@mui/material';
//import Signin from '../../features/Signin';
import IMSButton from '../IMSButton';
//import Person2Icon from '@mui/icons-material/Person2';

//const pages = ['cake', 'Chocolates', 'Flowers','Gifts','Plants'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function IMSNavbar(props) {
    let pages = props.pages
    let settings = props.settings
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const [anchorElUser, setAnchorElUser] = React.useState(null);
const navLinkStyles=({isActive})=>{
  return{
    fontWeight:isActive?'bold':'normal',
    textDecoration:'none',
    textTransform:'none',
    my:2,
    fontSize:isActive?'18px':'16px',
    display:'block'?'Pink':'white',
fontWeight:isActive?'bold':'normal',
marginRight:'10px',marginLeft:'10px'
  
  }
}
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:"#F88379"}} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to ='/' style={{textDecoration:'none'}}>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INVENTORY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page) => (
                <Link to = {page} style={{textDecoration:"none"}} >
               < MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                {page}
              
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
                    
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <NavLink to={page} style={navLinkStyles} onClick={handleCloseNavMenu}>
               {/* <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page} 
              </Button> */}
              {page}
              </NavLink>
              

            ))}
        
            
              </Box>
              <Link to={'/Signin'}>
              

              
              <IMSButton/>
              </Link>
              

                          
            
          
          

            


          <Link to={'Cart'}>
          <Box sx={{marginRight:"30px"}}>
            
            <CartComp/>
          </Box>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  src="https://5.imimg.com/data5/KE/OJ/MY-50640432/barbie-doll-500x500.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to = {setting}>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default IMSNavbar;